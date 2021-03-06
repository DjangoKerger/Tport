import React from 'react';

const Header = () => {
  return (
  
  <header>
  <div class="menu-btn">
    <div class="btn-line"></div>
    <div class="btn-line"></div>
    <div class="btn-line"></div>
  </div>

  <nav class="menu">
    <div class="menu-branding">
      <div class="portrait"></div>
    </div>
    <ul class="menu-nav">
      <li class="nav-item">
        <a href="/" class="nav-link">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a href="/about.html" class="nav-link">
          About Me
        </a>
      </li>
      <li class="nav-item">
        <a href="/work.html" class="nav-link">
          My Work
        </a>
      </li>
      <li class="nav-item">
        <a href="/contact.html" class="nav-link">
          How To Reach me
        </a>
      </li>
    </ul>
  </nav>
</header>

  )};

export default Header;
