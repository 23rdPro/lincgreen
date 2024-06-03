/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import 'swiper/css';
import Script from "next/script";
import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../public/assets/vendor/aos/aos.css"
import "../../public/assets/vendor/glightbox/css/glightbox.min.css"
import "../../public/assets/vendor/swiper/swiper-bundle.min.css"
import "../../public/assets/css/main.css"
import "../app/css/footer.css" 
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";
import { getBlogs, getData, getEntry } from "./utils/libs/contentful";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import { spaceId, cmaToken } from "@/app/utils/libs/contentful";
import Home from "./Components/Home";
import Blogs from "./Components/Blog";
export const metadata: Metadata = {
  title: "LincGreen Initiative",
  description: `
  The LincGreen Initiative aims to foster collaboration between technical professionals and 
  communities for the identification, research, and solution-oriented approach to address 
  climate crises faced by communities worldwide, where communities are resilient to 
  climate change through innovative solutions developed by collaborative efforts 
  between technical professionals and local communities..
  `,
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fields: any = await getData()
  const email = fields.email || "info@lincgreen.org"
  const mobile = fields.mobile || "07039734721"
  const socials = fields.socials || []
  const about = fields.about?.fields || {}
  const welcomeProject = fields.project || "https://google.com"
  const stories = fields.stories || []
  const video: any = await getEntry(about.video.sys.id)
  const action = fields.action
  const portfolios = fields.portfolios || []
  const blogs: any = await getBlogs() 
  const clients = fields.clients || []
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" 
          rel="stylesheet" />
      </head>
      <body>
        <TopBar socials={socials} email={email} />
        <Header />
        <Intro welcomeProject={welcomeProject} stories={stories} />
        <Home 
          about={about}
          socials={socials}
          cmaToken={cmaToken}
          spaceId={spaceId}
          portfolios={portfolios}
          video={video}
          action={action}
          mobile={mobile}
          email={email}
          clients={clients}
        />
        <Blogs blogs={blogs} />
        {children}
        <Footer socials={socials} />
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center active">
          <i className="bi bi-arrow-up-short"></i>
        </a>
        {/* <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script> */}
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive"></Script>
        {/* <Script src="assets/vendor/aos/aos.js" strategy="lazyOnload"></Script> */}
        <Script id="animate-on-scroll" strategy="lazyOnload">{`AOS.init()`}</Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload"></Script>
        {/* <Script src="assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload"></Script> */}
        {/* <Script src="assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload"></Script> */}
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload"></Script>
        {/* <Script src="assets/vendor/php-email-form/validate.js" strategy="lazyOnload"></Script> */}
        <Script src="/assets/js/main.js" strategy="lazyOnload"></Script>
      </body>
    </html>
  );
};