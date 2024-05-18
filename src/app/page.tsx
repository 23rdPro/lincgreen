"use client";

import Image from "next/image";
import { 
  aboutIntro, contactText, email, fcbk, greens, iam, ingr, intro, lkdn, location, medium, mobile, 
  objectives, portfolios, storyAbout, tabs, textService, topicAbout, twtr, 
  vizn, ytbe
} from "./utils/consts";
import ClientCarousel from "./Components/Carousel/clients";

export default function Home() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>Lincgreen<span>.</span></h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              {tabs.map((tab, index: number) => (
                <li key={index++}><a href={`#${tab.href}`}>{tab.text}</a></li>
              ))}
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">  
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>Welcome to <span>{iam}</span></h2>
              <p>{vizn}</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#footer" className="btn-get-started">Subscribe</a>
                <a 
                  href={ytbe} 
                  className="glightbox btn-watch-video d-flex align-items-center">
                    <i className="bi bi-play-circle"></i><span>Our Projects</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <Image 
                width={550} 
                height={550} 
                // fill
                src="/assets/img/hero-img.svg" 
                className="img-fluid" 
                alt="" 
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

            {objectives.map((objective, index) => (
                <div key={index++} className="col-xl-3 col-md-6" data-aos-delay="100" data-aos="fade-up"> {/*  */}
                <div className="icon-box">
                  <div className="icon"><i className={objective.icon}></i></div>
                  <h4 className="title"><a href="" className="stretched-link">{objective.text}</a></h4>
                </div>
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>{aboutIntro}</p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-6">
                <h3>{topicAbout}</h3>
                <Image 
                  width={650} 
                  height={650} 
                  src="/assets/img/about.jpg" 
                  className="img-fluid rounded-4 mb-4" 
                  alt="" 
                  style={{ width: "auto", height: "auto" }}
                />
                <p>{storyAbout}</p>
                <a href="" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    The LINC Green Initiative aims to achieve the following objectives:
                  </p>
                  <ul>
                    {greens.map((green, index) => (
                      <li key={index++}><i className="bi bi-check-circle-fill"></i>{green.text}</li>
                    ))}
                  </ul>
                  <div className="position-relative mt-4">
                    <Image 
                      width={650}  
                      height={650} 
                      src="/assets/img/about-2.jpg" 
                      className="img-fluid rounded-4" 
                      alt="" 
                      style={{ width: "auto", height: "auto" }}
                    />
                    <a href={ytbe} className="glightbox play-btn"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-out">
            <ClientCarousel />
          </div>
        </section>
        <section id="call-to-action" className="call-to-action">
          <div className="container text-center" data-aos="zoom-out">
            <a href={ytbe} className="glightbox play-btn"></a>
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a className="cta-btn" href="#">Call To Action</a>
          </div>
        </section>
        <section id="portfolio" className="services sections-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Our Services</h2>
              <p>{textService}</p>
            </div>

            <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
              {portfolios.map((portfolio, index) => (
                <div className="col-lg-4 col-md-6" key={index++}>
                  <div className="service-item  position-relative">
                    <div className="icon">
                      <i className={portfolio.iconClassName}></i>
                    </div>
                    <h3>{portfolio.title}</h3>
                    <p>{portfolio.text}</p>
                    <a href={portfolio.href} className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Contact</h2>
              <p>{contactText}</p>
            </div>

            <div className="row gx-lg-0 gy-4">

              <div className="col-lg-4">

                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Location:</h4>
                      <p>{location}</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>{email}</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Call:</h4>
                      <p>{mobile}</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-clock flex-shrink-0"></i>
                    <div>
                      <h4>Open Hours:</h4>
                      <p>Mon-Fri: 8AM - 5PM</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={7} placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>LincGreen</span>
              </a>
              <p>{intro}</p>
              <div className="social-links d-flex mt-4">
                <a href={twtr} className="twitter"><i className="bi bi-twitter"></i></a>
                <a href={fcbk} className="facebook"><i className="bi bi-facebook"></i></a>
                <a href={ingr} className="instagram"><i className="bi bi-instagram"></i></a>
                <a href={lkdn} className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <ul>
                {tabs.map((tab, index) => (
                  <li key={index++}><a href={`#${tab.href}`}>{tab.text}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Story</h4>
              <ul>
                {objectives.map((objective, index) => (
                  <li key={index++}><a href={objective.href}>{objective.text}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                A108 ABC Street <br />
                Port Harcourt, PH 535022
                Nigeria <br /><br />
                <strong>Phone:</strong> {mobile}<br />
                <strong>Email:</strong> {email}<br />
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href={medium}>{iam}</a>
          </div>
        </div>
      </footer>
    </>
  );
}