import { intro, tabs, objectives, mobile, email } from "@/app/utils/consts";
import Link from "next/link";
import PropTypes from 'prop-types';
const Footer = ({ socials }: {socials: Array<any>}) => {
  return (
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
                <li key={index++}><Link href={`${tab.href}`}>{tab.text}</Link></li>
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
  );
};
Footer.propTypes = {
  socials: PropTypes.array.isRequired
};
export default Footer;