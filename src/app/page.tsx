import Image from "next/image";
import { 
  aboutIntro, contactText, greens, iam, iconClasses, 
  intro, objectives, tabs, textService, vizn,
} from "./utils/consts";
import ClientCarousel from "./Components/Carousel/clients";
import { createClient } from "contentful";
import Link from "next/link";

type ContactFormType = {
  name?: String,
  email: String,
  subject?: String,
  message?: String
};

type FormType = {
  data: ContactFormType,
  contentType: Object
}

async function getClient() {
  const spaceId = process.env.SPACE_ID
  const token = process.env.TOKEN
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

// async function postForm(form) {};

export default async function Home() {
  const fields: any = await getData()

  console.log(fields, ">>>>>>>>>>>>><<<<<<<<<,")

  const email = fields.email || "info@lincgreen.org"
  const mobile = fields.mobile || "07039734721"
  const socials = fields.socials || []
  const about = fields.about?.fields || {}
  const welcomeProject = fields.project || "https://google.com"
  const stories = fields.stories || []
  const video: any = await getEntry(about.video.sys.id)
  const clients = fields.clients || []
  const action = fields.action
  console.log(action.fields.link)
  

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
                {`${about.description}`}
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
              portfolio
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
                      <p>location</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>email</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Call:</h4>
                      <p>
                        phone
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
      <footer id="footer" className="footer position-absolute w-100">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>LincGreen</span>
              </a>
              <p>{intro}</p>
              <div className="social-links d-flex mt-4">
                <a href="" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="" className="linkedin"><i className="bi bi-linkedin"></i></a>
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
                
                {/* <strong>Phone:</strong> {mobile}<br /> */}
                {/* <strong>Email:</strong> {email}<br /> */}
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