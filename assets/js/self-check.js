(function () {
  const form = document.getElementById('osta-form');
  if (!form) {
    return;
  }

  const ageInput = document.getElementById('age');
  const weightInput = document.getElementById('weight');
  const eligibleInput = document.getElementById('osta-eligible');
  const resultValue = document.getElementById('osta-result-value');
  const resultLevel = document.getElementById('osta-result-level');
  const resultText = document.getElementById('osta-result-text');
  const resultPill = document.getElementById('risk-pill');
  const riskNote = document.getElementById('risk-note');

  function formatRisk(score) {
    if (score > -1) {
      return {
        label: '低風險',
        className: 'risk-low',
        text: 'OSTA 顯示低骨密度的可能性較低，但不能排除骨鬆或骨折風險；已有骨折、長期用類固醇或符合 DXA 檢查情境者，仍需就醫評估。',
        showAdvice: true
      };
    }

    if (score >= -4) {
      return {
        label: '中度風險',
        className: 'risk-medium',
        text: 'OSTA 顯示低骨密度的可能性增加，建議與醫師討論 DXA；這不是骨鬆診斷，也不是骨折百分比。',
        showAdvice: true
      };
    }

    return {
      label: '高風險',
      className: 'risk-high',
      text: 'OSTA 顯示低骨密度的可能性較高，請安排醫師評估與 DXA；不要只憑分數自行用藥。',
      showAdvice: true
    };
  }

  function updateScore() {
    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);

    const eligible = eligibleInput.value === 'yes';
    if (!eligible || !Number.isInteger(age) || !Number.isFinite(weight) ||
        age < 50 || age > 120 || weight < 0.1 || weight > 300) {
      resultValue.textContent = '—';
      resultLevel.textContent = eligible ? '請輸入有效年齡與體重' : '請先確認適用族群';
      resultText.textContent = eligible
        ? '請輸入 50–120 歲的整數年齡與 0.1–300 公斤的體重。範圍外請由醫師評估。'
        : '本工具限 50 歲以上亞洲停經後女性，且未確診、未在治療骨鬆者。其他族群或不確定者請由醫師評估，不提供風險分級。';
      if (resultPill) {
        resultPill.className = 'risk-pill risk-neutral';
        resultPill.textContent = '請輸入資料';
      }
      if (riskNote) {
        riskNote.hidden = true;
      }
      return;
    }

    // Conventional integer OSTA: discard decimals towards zero, not floor/round.
    // Dividing by 5 is equivalent to multiplying by 0.2.
    const score = Math.trunc((weight - age) / 5) || 0;
    const risk = formatRisk(score);
    const displayScore = String(score);

    resultValue.textContent = displayScore;
    resultLevel.textContent = risk.label;
    resultText.textContent = risk.text;

    if (resultPill) {
      resultPill.className = `risk-pill ${risk.className}`;
      resultPill.textContent = risk.label;
    }

    if (riskNote) {
      riskNote.hidden = !risk.showAdvice;
    }
  }

  ageInput.addEventListener('input', updateScore);
  weightInput.addEventListener('input', updateScore);
  eligibleInput.addEventListener('change', updateScore);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateScore();
  });

  updateScore();
})();

