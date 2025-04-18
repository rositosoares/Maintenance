const body = document.body;
const toggleBtn = document.getElementById('toggle-theme');

// Cek preferensi dari localStorage
const isDark = localStorage.getItem('dark-mode') === 'true';
if (isDark) {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isNowDark = body.classList.contains('dark');
  localStorage.setItem('dark-mode', isNowDark);
  toggleBtn.textContent = isNowDark ? '☀️' : '🌙';
});