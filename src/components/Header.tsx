import React from 'react'

function Header() {
  return (
    <header id="home" className="w-full">
      <div className="w-full p-2">
        {/* Logo and btn */}
        <div className=" flex justify-between items-center">
          <a href="#">
            <h1 className="port-logo">PORTFOLIO</h1>
          </a>
          <button className="btn btn-sm">
            <p>Work with me</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header
