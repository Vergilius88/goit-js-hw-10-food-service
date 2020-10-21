import './styless/styles.scss';
import menu from './menu.json';
import menuTemplate from './template/menu-template.hbs';
const bodyRef = document.querySelector('body');
const switchInputRef = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('.js-menu');
const markup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkboxPosition = () => {
  if (localStorage.getItem('theme') === Theme.DARK) {
    switchInputRef.setAttribute("checked", true);
  } 
};
const defaultTheme = () => {
  if (localStorage.getItem('theme') === null) {
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyRef.classList.add(localStorage.getItem('theme'));
    checkboxPosition();
  }
};
const changeThemeBySwitch = () => {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};
switchInputRef.addEventListener('change', changeThemeBySwitch);
defaultTheme();
