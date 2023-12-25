const menubtn = document.querySelector('.menu');
const menu = document.querySelector('header ul');
const up = document.querySelector('.up');

$(document).ready(function () {
  // header mobile dropdown
  $('.js-header-nav-toggle').click(function (event) {
    $('body').toggleClass('is-menu-show');
  });

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      up.style.display = "block";
    } else {
      up.style.display = "none";
    }
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      menubtn.style.transform = 'rotate(0deg)';
      menubtn.classList.add('uil-bars');
      menubtn.classList.remove('uil-times');
    }
  });

  up.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const nav1 = document.getElementById('nav1');
  const nav2 = document.getElementById('nav2');
  const nav3 = document.getElementById('nav3');
  const nav4 = document.getElementById('nav4');

  nav1.onclick = closeMenu;
  nav2.onclick = closeMenu;
  nav3.onclick = closeMenu;
  nav4.onclick = closeMenu;

  const htmlbar = document.getElementById('bar1');
  const cssbar = document.getElementById('bar2');
  const jsbar = document.getElementById('bar3');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      htmlbar.classList.add('activehtml');
      cssbar.classList.add('activecss');
      jsbar.classList.add('activejs');
    }
  });

  const sw = document.querySelector('.swicth-theme');
  const swcircle = document.querySelector('.switchcircle');

  sw.addEventListener('click', () => {
    if (!swcircle.classList.contains('on')) {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
  });

  function closeMenu() {
    menu.classList.remove('open');
    menubtn.style.transform = 'rotate(0deg)';
    menubtn.classList.add('uil-bars');
    menubtn.classList.remove('uil-times');
  }

  function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
      swcircle.classList.add('on');
      document.body.classList.add('dark');
    } else {
      swcircle.classList.remove('on');
      document.body.classList.remove('dark');
    }

    closeMenu();
  }
});
