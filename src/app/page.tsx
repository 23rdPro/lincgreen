import Image from "next/image";
import { 
  aboutIntro, contactText, greens, iam, iconClasses, 
  intro, objectives, tabs, textService, vizn,
} from "./utils/consts";
import ClientCarousel from "./Components/Carousel/clients";
import { createClient } from "contentful";
import Link from "next/link";
import React from "react";
import ContactForm from "./Components/Form/contactForm";
import Form from "./Components/Form";

function getEnv() {
  const spaceId = process.env.SPACE_ID
  const token = process.env.TOKEN
  const cmaToken = process.env.CMATOKEN
  return [spaceId, token, cmaToken]
}; 
const [spaceId, token, cmaToken] = getEnv()
async function getClient() {
  const client = createClient({ space: `${spaceId}`, accessToken: `${token}` })
  return client
};
async function getData() {
  const client = await getClient()
  try {
    const data = await client.getEntries({ content_type: "lincGreenProspects" })
    return data.items[0].fields;
  } catch (error) {
    console.error(error)
    return {};
  }
};
async function getEntry(id: string) {
  const client = await getClient()
  try {
    const entry = await client.getEntry(id=id)
    return entry.fields
  } catch (error) {
    console.error(error)
    return {};
  }
};
export default async function Home() {
  const fields: any = await getData()
  const email = fields.email || "info@lincgreen.org"
  const mobile = fields.mobile || "07039734721"
  const socials = fields.socials || []
  const about = fields.about?.fields || {}
  const welcomeProject = fields.project || "https://google.com"
  const stories = fields.stories || []
  const video: any = await getEntry(about.video.sys.id)
  const clients = fields.clients || []
  const action = fields.action
  const portfolios = fields.portfolios || []  
  return (
    <>
      <section id="topbar" className="topbar d-flex align-items-center" >
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href={`mailto:${email}`}>{email}</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>{mobile}</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socials.map((social: any, index: number) => (
              <a 
                key={index++} 
                href={`${social.fields.link}`} 
                className={`${social.fields.name?.toLowerCase()}`}>
                  <i className={`bi bi-${social.fields.name?.toLowerCase()}`}></i>
              </a>
            ))}
            
          </div>
        </div>
      </section>
      <header id="header" className="header d-flex align-items-center" >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>LincGreen<span>.</span></h1>
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
                  <h4 className="title"><a href={`${story.fields.link}`} className="stretched-link">{`${story.fields.name.toUpperCase()}`}</a></h4>
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
                <h3>
                  {`${about.title}`}
                </h3>
                <Image 
                  width={650} 
                  height={650} 
                  src={`https:${about.image.fields.file.url}`}
                  className="img-fluid rounded-4 mb-4" 
                  alt="" 
                  style={{ width: "auto", height: "auto" }}
                />
                <p>
                {`${about.description}`.slice(0, 1000)}
                </p>
                <a 
                  href={`${about.link}`}
                  className="readmore stretched-link"
                >Read more 
                  <i className="bi bi-arrow-right"></i>
                </a>
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
                      src={`https:${video.image?.fields.file.url}`} 
                      className="img-fluid rounded-4" 
                      alt={`${iam}`} 
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Link
                      href={`${video.link}`} 
                      className="glightbox play-btn">
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-out">
            <ClientCarousel clients={clients}/>
          </div>
        </section>
        <section id="call-to-action" className="call-to-action">
          <div className="container text-center" data-aos="zoom-out">
            <Link
              href={`${action.fields.link}`}
              className="glightbox play-btn">
            </Link>
            <h3>Call To Action</h3>
            <p> Join us in the LincGreen Initiative to combat climate crises in Nigeria through 
              innovative collaboration!</p>
            <a className="cta-btn" href={`${action.fields.link}`}>Call To Action</a>
          </div>
        </section>
        <section id="portfolio" className="services sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>{textService}</p>
            </div>
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
              {portfolios.map((portfolio: any, index: number) => (
                <div key={index++} className="col-lg-4 col-md-6">
                  <div className="service-item  position-relative">
                    <div className="icon">
                      <i className={iconClasses[`${portfolio.fields.icon}`]}></i>
                    </div>
                    <h3>{`${portfolio.fields.title}`}</h3>
                    <p>{`${portfolio.fields.description}`.slice(0, 153)}...</p>
                    <a href={`${portfolio.fields.link}`} className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
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
                      <h4>Socials:</h4>
                      <p>
                        {socials.map((social: any, index: number) => (
                          <a 
                            key={index++} 
                            href={`${social.fields.link}`} 
                            className={`${social.fields.name?.toLowerCase()}`}>
                              <i className={`bi bi-${social.fields.name?.toLowerCase()}`}></i>
                          </a>
                        ))}
                      </p>
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
                      <p>
                        {mobile}
                      </p>
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
                <Form env={[spaceId, cmaToken]}>
                  <ContactForm />
                </Form>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer id="footer" className="footer position-absolute w-100">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>LincGreen</span>
              </a>
              <p>{intro}</p>
              <div className="social-links d-flex mt-4">
                {socials.map((social: any, index: number) => (
                  <a 
                    key={index++} 
                    href={`${social.fields.link}`} 
                    className={`${social.fields.name?.toLowerCase()}`}>
                      <i className={`bi bi-${social.fields.name?.toLowerCase()}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {tabs.map((tab, index) => (
                  <li key={index++}><Link href={`#${tab.href}`}>{tab.text}</Link></li>
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
                
                <strong>Phone:</strong> {mobile}<br />
                <strong>Email:</strong> {email}<br />
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright <strong><span></span></strong>. All Rights Reserved
          </div>
          
        </div>
      </footer>
      <Link href="#" className="scroll-top d-flex align-items-center justify-content-center active">
        <i className="bi bi-arrow-up-short"></i>
      </Link>
      {/* {loading ? <div id="preloader"></div> : null} */}
    </>
  );
}