import React from 'react';

const Menu = () => {

  //select DOM items
  const menuBtn = document.querySelector('.btn-menu');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const navItems = document.querySelectorAll('.nav-item');

  // Set Initial State Of Menu
  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if(!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item =>item.classList.add('show'));

      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item =>item.classList.add('show'));

      // Set Menu State
      showMenu = true;

    }
  }  
  return <></>;
};

export default Menu;
