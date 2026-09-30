(function () {
  const form = document.getElementById('osta-form');
  if (!form) {
    return;
  }

  const ageInput = document.getElementById('age');
  const weightInput = document.getElementById('weight');
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
        text: '目前屬於低風險，仍建議維持健康生活方式與適當追蹤。',
        showAdvice: false
      };
    }

    if (score >= -4) {
      return {
        label: '中度風險',
        className: 'risk-medium',
        text: '中度風險，建議和醫師討論是否需要做骨密度檢查。',
        showAdvice: true
      };
    }

    return {
      label: '高風險',
      className: 'risk-high',
      text: '高風險，建議和醫師討論是否需要做骨密度檢查。',
      showAdvice: true
    };
  }

  function updateScore() {
    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);

    if (!Number.isFinite(age) || !Number.isFinite(weight) || age <= 0 || age > 120 || weight <= 0 || weight > 300) {
      resultValue.textContent = '—';
      resultLevel.textContent = '請輸入有效年齡與體重';
      resultText.textContent = '請先輸入年齡與體重，計算結果會顯示在這裡。';
      if (resultPill) {
        resultPill.className = 'risk-pill risk-medium';
      }
      if (riskNote) {
        riskNote.hidden = true;
      }
      return;
    }

    const rawScore = (weight - age) * 0.2;
    const score = Number(rawScore.toFixed(1));
    const risk = formatRisk(score);
    const displayScore = score.toFixed(1);

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
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateScore();
  });

  updateScore();
})();
