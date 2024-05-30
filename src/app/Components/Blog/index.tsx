import React from "react";
import TopBar from "@/app/Components/TopBar";
import { getData } from "@/app/utils/libs/contentful";
import Footer from "../Footer";
import { tabs } from "@/app/utils/consts";
import Blog from "./blog";
import Breadcrumb from "../Breadcrumb";
const Blogs = async () => {
  const fields: any = await getData()
  const socials = fields.socials || []
  const email = fields.email || "info@lincgreen.org"
  return (
    <>
      <TopBar socials={socials} email={email} />
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
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
      <main id="main">
        <Breadcrumb />
        <Blog />
      </main>
      <Footer socials={socials} />
    </>
  );
};
export default Blogs; 