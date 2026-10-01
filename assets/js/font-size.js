(function () {
  const storageKey = 'osteoporosis-font-size';
  const sizes = ['small', 'medium', 'large'];
  const root = document.documentElement;
  const disclosureSelector = '[data-disclosure]';

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

  function syncDisclosureState(disclosure) {
    const summary = disclosure.querySelector('summary');
    if (summary) {
      summary.setAttribute('aria-expanded', String(disclosure.open));
    }
  }

  function closeDisclosure(disclosure, focusSummary) {
    if (!disclosure.open) {
      return;
    }

    disclosure.open = false;
    syncDisclosureState(disclosure);

    if (focusSummary) {
      const summary = disclosure.querySelector('summary');
      if (summary) {
        summary.focus();
      }
    }
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
        const parentDisclosure = button.closest('.font-disclosure');
        try {
          localStorage.setItem(storageKey, nextSize);
        } catch (error) {
          // Ignore storage failures and keep the session setting only.
        }
        applySize(nextSize);
        if (parentDisclosure) {
          closeDisclosure(parentDisclosure, true);
        }
      });
    });

    const disclosures = Array.from(document.querySelectorAll(disclosureSelector));

    disclosures.forEach((disclosure) => {
      syncDisclosureState(disclosure);

      disclosure.addEventListener('toggle', () => {
        if (disclosure.open) {
          disclosures.forEach((otherDisclosure) => {
            if (otherDisclosure !== disclosure) {
              closeDisclosure(otherDisclosure, false);
            }
          });
        }
        syncDisclosureState(disclosure);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') {
        return;
      }

      disclosures.forEach((disclosure) => {
        closeDisclosure(disclosure, true);
      });
    });

    document.querySelectorAll('[data-nav-link]').forEach((link) => {
      link.addEventListener('click', () => {
        const menuDisclosure = link.closest('.menu-disclosure');
        if (menuDisclosure) {
          closeDisclosure(menuDisclosure, false);
        }
      });
    });
  });
})();
