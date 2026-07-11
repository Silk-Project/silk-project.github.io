const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const storedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', storedTheme);
updateToggleIcon(storedTheme);

function handleThemeToggle() {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleIcon(next);
}

themeToggle.addEventListener('click', handleThemeToggle);

function updateToggleIcon(theme) {
  const icon = theme === 'light'
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
  themeToggle.innerHTML = icon;
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
