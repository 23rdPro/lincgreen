"use client";
import { iam, iconClasses, vizn } from "@/app/utils/consts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PropType from "prop-types";
const Intro = ({welcomeProject, stories}: any) => {
  const path = usePathname();
  return (
    path === "/" ? (
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">  
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>Welcome to <span>LincGreen</span></h2>
              <p>{vizn}</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#contact" className="btn-get-started">Get Started</a>
                <a 
                  href={`${welcomeProject}`}
                  className="glightbox btn-watch-video d-flex align-items-center">
                    <i className="bi bi-play-circle"></i><span>Our Projects</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <Image 
                width={550} 
                height={550} 
                src="/assets/img/hero-img.svg" 
                className="img-fluid" 
                alt={`${iam}`} 
                data-aos="zoom-out" 
                data-aos-delay="100" 
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="icon-boxes position-relative">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
            {stories.map((story: any, index: number) => (
              <div key={index++} className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className={iconClasses[`${story.fields.name.toLowerCase()}`]}></i></div>
                  <h4 className="title"><a href={`${story.fields.link || ""}`} className="stretched-link">{`${story.fields.name.toUpperCase()}`}</a></h4>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    ) : <></>
  );
};
Intro.propTypes = {
  welcomeProject: PropType.string.isRequired,
  stories: PropType.any.isRequired
};
export default Intro;