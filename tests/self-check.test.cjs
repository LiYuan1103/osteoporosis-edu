const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const script = fs.readFileSync(path.join(__dirname, '../assets/js/self-check.js'), 'utf8');

// Exercise the actual browser event handlers, including clearing a prior result.
function setup() {
  const ids = ['osta-form', 'age', 'weight', 'osta-eligible', 'osta-result-value',
    'osta-result-level', 'osta-result-text', 'risk-pill', 'risk-note'];
  const elements = Object.fromEntries(ids.map(id => [id, {
    value: '', textContent: '', className: '', hidden: false, events: {},
    addEventListener(type, callback) { this.events[type] = callback; }
  }]));
  vm.runInNewContext(script, { document: { getElementById: id => elements[id] } });
  function enter(age, weight, eligible = 'yes') {
    elements.age.value = String(age);
    elements.weight.value = String(weight);
    elements['osta-eligible'].value = eligible;
    elements['osta-form'].events.submit({ preventDefault() {} });
    return [elements['osta-result-value'].textContent, elements['risk-pill'].textContent];
  }
  return { elements, enter };
}

test('integer OSTA: boundaries, truncation, decimal weights, negative zero', () => {
  const { enter } = setup();
  for (const [age, weight, expected, level] of [
    [70, 70, '0', '低風險'], [65, 62, '0', '低風險'],
    [70, 65.1, '0', '低風險'], [70, 65, '-1', '中度風險'],
    [60, 51, '-1', '中度風險'], [70, 50.1, '-3', '中度風險'],
    [70, 50, '-4', '中度風險'], [70, 46, '-4', '中度風險'],
    [70, 45.1, '-4', '中度風險'], [70, 45, '-5', '高風險'],
    [70, 44.9, '-5', '高風險'], [50, 60, '2', '低風險']
  ]) assert.deepEqual(enter(age, weight), [expected, level]);
});

test('missing, invalid and out-of-scope input clears previous classification', () => {
  const { enter } = setup();
  for (const args of [ ['', 50], [70, ''], [49, 50], [121, 50],
    [70.5, 50], [70, 0], [70, -1], [70, 301], [NaN, 50],
    [70, Infinity], [70, 50, ''], [70, 50, 'no'] ]) {
    enter(70, 45);
    assert.deepEqual(enter(...args), ['—', '請輸入資料']);
  }
});

test('eligibility change and live input cannot leave a stale low-risk result', () => {
  const { elements, enter } = setup();
  enter(70, 70);
  assert.equal(elements['risk-note'].hidden, false);
  assert.match(elements['osta-result-text'].textContent, /不能排除/);
  elements['osta-eligible'].value = 'no';
  elements['osta-eligible'].events.change();
  assert.equal(elements['osta-result-value'].textContent, '—');
  enter(70, 70);
  elements.age.value = '';
  elements.age.events.input();
  assert.equal(elements['osta-result-value'].textContent, '—');
});

test('FAQ print expands every answer and restores the original state', () => {
  const items = [{ open: false }, { open: true }, { open: false }];
  const events = {};
  const fontScript = fs.readFileSync(path.join(__dirname, '../assets/js/font-size.js'), 'utf8');
  vm.runInNewContext(fontScript, {
    window: { addEventListener: (name, fn) => { events[name] = fn; } },
    document: { documentElement: {}, addEventListener() {}, querySelectorAll: () => items }
  });
  events.beforeprint();
  events.beforeprint(); // Browser may emit more than once; do not lose original state.
  assert.deepEqual(items.map(x => x.open), [true, true, true]);
  events.afterprint();
  assert.deepEqual(items.map(x => x.open), [false, true, false]);
  events.afterprint();
});
