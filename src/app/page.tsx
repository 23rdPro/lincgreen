import Image from "next/image";
import { 
  aboutIntro,
  email, 
  fcbk, 
  greens, 
  iam, 
  ingr, 
  intro, 
  lkdn, 
  medium, 
  mobile, 
  objectives, 
  storyAbout, 
  tabs, 
  topicAbout, 
  twtr, 
  vizn,
  ytbe
} from "./utils/consts";

export default function Home() {
  return (
    <>
      

      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {/* <Image fill src="/assets/img/logo.png" alt="" /> */}
            <h1>Lincgreen<span>.</span></h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              {tabs.map((tab, index: number) => (
                <li key={index++}><a href={`#${tab.href}`}>{tab.text}</a></li>
              ))}
              {/* <li><a href="#hero">About LincGreen</a></li>
              <li><a href="#about">Portfolio</a></li>
              <li><a href="#services">Catch up</a></li>
              <li><a href="#portfolio">Blog</a></li> */}
              {/* <li><a href="#team">Team</a></li>
              <li><a href="blog.html">Blog</a></li> */}

              {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> */}

              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" >  {/* data-aos="fade-in" */}
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
                // data-aos="zoom-out" 
                data-aos-delay="100" 
                priority
              />
            </div>
          </div>
        </div>

        <div className="icon-boxes position-relative">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">

            {objectives.map((objective, index) => (
                <div key={index++} className="col-xl-3 col-md-6" data-aos-delay="100"> {/* data-aos="fade-up" */}
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
                <Image width={650} height={650} src="/assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
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
                    <Image width={650} height={650} src="/assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />
                    <a href={ytbe} className="glightbox play-btn"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="clients" className="clients">
          <div className="container" data-aos="zoom-out">

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
              </div>
            </div>

          </div>
        </section> */}
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

            {/* <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div> */}

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                A108 ABC Street <br />
                Port Harcourt, PH 535022<br />
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