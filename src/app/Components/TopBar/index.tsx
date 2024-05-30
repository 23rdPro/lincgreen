import { mobile } from "@/app/utils/consts";
import PropTypes from "prop-types"
const TopBar = ({ socials, email }: { socials: Array<any>, email: string }) => {
  return (
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
  );
};
TopBar.propTypes = {
  socials: PropTypes.array.isRequired
};
export default TopBar;