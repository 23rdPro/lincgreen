"use client";
import { 
  aboutIntro, greens, iam, textService, iconClasses, contactText, 
} from "@/app/utils/consts";
import Image from "next/image";
import Link from "next/link";
import Form from "@/app/Components/Form"
import ContactForm from "@/app/Components/Form/contactForm";
import ClientCarousel from "../Carousel/clients";
import PropType from "prop-types";
import { usePathname } from "next/navigation";
const Home = ({
  about, 
  video,
  action,
  portfolios,
  socials,
  email,
  mobile,
  spaceId, 
  cmaToken,
  clients
}: any) => {
  const path = usePathname();
  return (
    path === "/" ? (
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
                  unoptimized
                  width={350} 
                  height={350} 
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
                      unoptimized
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
                    <p>{`${portfolio.fields.description}`.slice(0, 500)}  . . .</p>
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
    ) : <></>
  )
};
Home.propTypes = {
  about: PropType.any.isRequired, 
  video: PropType.any.isRequired, 
  action: PropType.any.isRequired, 
  portfolios: PropType.any.isRequired, 
  socials: PropType.any.isRequired, 
  email: PropType.any.isRequired, 
  mobile: PropType.any.isRequired, 
  spaceId: PropType.any.isRequired, 
  cmaToken: PropType.any.isRequired, 
  clients: PropType.any.isRequired,
};
export default Home;