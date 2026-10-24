'use strict';

for (const button of document.querySelectorAll('[data-copy]')) {
  if (!navigator.clipboard || !window.isSecureContext) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    const command = document.getElementById(button.dataset.copy);
    const status = document.querySelector('.copy-status');
    if (!command || !status) return;
    try {
      await navigator.clipboard.writeText(command.textContent);
      status.textContent = 'Commands copied. Paste them into Terminal when you are ready.';
    } catch {
      status.textContent = 'Copy was blocked. Select the commands above and copy them manually.';
    }
  });
}
