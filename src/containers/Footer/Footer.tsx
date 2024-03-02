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
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/work">Work</a>
              <a href="#">Terms</a>
              <a href="#">Policy</a>
            </div>
          </div>
          <div className="right-footer">
            <div className="social-links">
              <a href="#"><img src={facebook} alt="facebook" /></a>
              <a href="#"><img src={dribble} alt="dribble" /></a>
              <a href="#"><img src={instagram} alt="instagram" /></a>
              <a href="#"><img src={linkedin} alt="linkedin" /></a>
            </div>
            <div className="contact-info">
              <p>hello@forgestudio.com</p>
              <p>+1(352) 8844 0270 </p>
            </div>
          </div>
        </div>
        <div className="footer-buttom">
          <p>&copy; 2024 Forge Studio. All rights reserved.</p>
          <p className="developedby">Developed by <a href="https://opaleke.vercel.app/">Josiah Opaleke</a></p>
        </div>
      </div>
    </div>
  );
};
