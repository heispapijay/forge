import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import facebook from "../../assets/facebook.svg";
import dribble from "../../assets/dribbble.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import "./footer.scss";
import { CTA } from "../../components";

export const Footer = () => {
  return (
    <div className="footer">
      <CTA />
      <div className="default-wrapper">
        <div className="footer-container">
          <div className="left-footer">
            <div className="nav-logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <p>
              Forge is an award UI/UX designs and branding agency based in
              Ocala, FL.
            </p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Policy</Link>
            </div>
          </div>
          <div className="right-footer">
            <div className="social-links">
              <Link to="#"><img src={facebook} alt="facebook" /></Link>
              <Link to="#"><img src={dribble} alt="dribble" /></Link>
              <Link to="#"><img src={instagram} alt="instagram" /></Link>
              <Link to="#"><img src={linkedin} alt="linkedin" /></Link>
            </div>
            <div className="contact-info">
              <p>hello@forgestudio.com</p>
              <p>+1(352) 8844 0270 </p>
            </div>
          </div>
        </div>
        <div className="footer-buttom">
          <p>&copy; 2024 Forge Studio. All rights reserved.</p>
          <p className="developedby">Developed by <Link to="https://opaleke.vercel.app/">Josiah Opaleke</Link></p>
        </div>
      </div>
    </div>
  );
};
