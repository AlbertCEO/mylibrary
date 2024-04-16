import React from 'react'

function Navigation() {
  return (
    <div>
         <nav>
      <div class="nav__content">
        <div class="logo"><a href="#">MyLibrary</a></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li> 
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navigation