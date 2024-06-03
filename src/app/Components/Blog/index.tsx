"use client";
import React from "react";
import Breadcrumb from "../Breadcrumb";
import PropType from "prop-types";
import { usePathname } from "next/navigation";
import BlogList from "../BlogList";
const Blogs = ({ blogs }: any) => {
  const path = usePathname();
  return path === "/pages/blog" ? (
    <main id="main">
      <Breadcrumb />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <BlogList blogs={blogs}/>
          {/* <div className="blog-pagination">
            <ul className="justify-content-center">
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </div> */}
        </div>
      </section>
    </main>
  ) : <></>
};
Blogs.propTypes = {
  blogs: PropType.any.isRequired,
};
export default Blogs; 