import { Brand, Button, PageBanner } from "../../components";
import { AboutUs } from "../../containers/AboutUs/AboutUs";
import "./about.scss";

export const About = () => {
  return (
    <div className="about-screen">
      <div className="default-wrapper">
        <div className="about-hero">
          <PageBanner
            title="About Us"
            content="Whereby is the super simple way to connect over video. No downloads or long having into meeting links."
          />
          <Button text="Join Our Team" to="/" />
        </div>
        <Brand />
        <AboutUs />
      </div>
    </div>
  );
};
