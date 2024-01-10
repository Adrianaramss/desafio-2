document.addEventListener('DOMContentLoaded', function () {
  const themeButton = document.getElementById('toggle-theme-button');
  const themeStylesheet = document.getElementById('theme-stylesheet');

  themeButton.addEventListener('click', function () {
    if (themeStylesheet.getAttribute('href') === 'light-theme.css') {
      themeStylesheet.setAttribute('href', 'dark-theme.css');
    } else {
      themeStylesheet.setAttribute('href', 'light-theme.css');
    }
  });
});
