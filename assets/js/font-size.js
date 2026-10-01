(function () {
  const storageKey = 'osteoporosis-font-size';
  const sizes = ['small', 'medium', 'large'];
  const root = document.documentElement;

  function applySize(size) {
    const selected = sizes.includes(size) ? size : 'medium';
    root.setAttribute('data-font-size', selected);

    const buttons = document.querySelectorAll('[data-size-button]');
    buttons.forEach((button) => {
      const isActive = button.dataset.sizeButton === selected;
      button.setAttribute('aria-pressed', String(isActive));
      button.classList.toggle('active', isActive);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    let savedSize = 'medium';

    try {
      savedSize = localStorage.getItem(storageKey) || 'medium';
    } catch (error) {
      savedSize = 'medium';
    }

    applySize(savedSize);

    document.querySelectorAll('[data-size-button]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextSize = button.dataset.sizeButton;
        try {
          localStorage.setItem(storageKey, nextSize);
        } catch (error) {
          // Ignore storage failures and keep the session setting only.
        }
        applySize(nextSize);
      });
    });
  });
})();
