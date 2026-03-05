// Import Designsystemet web component behaviors
import '@digdir/designsystemet-web';

// Dark/light mode toggle
const toggle = document.getElementById('toggle-scheme');
if (toggle) {
  toggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-color-scheme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-color-scheme', next);
  });
}
