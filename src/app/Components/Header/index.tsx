import React from "react";
import { tabs } from "@/app/utils/consts";
const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center" >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1>LincGreen<span>.</span></h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            {tabs.map((tab, index: number) => (
              <li key={index++}><a href={`${tab.href}`}>{tab.text}</a></li>
            ))}
          </ul>
        </nav>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  )
};
export default Header;