import Marquee from "react-fast-marquee";
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
        <div className="move-picture">
        <Marquee gradient gradientWidth={100}>
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
          <div className="image4"></div>
          <div className="image5"></div>
          <div className="image6"></div>
          <div className="image7"></div>
        </Marquee>
        </div>
        <Brand />
        <AboutUs />
        {/* <CoreValues /> */}
      </div>
    </div>
  );
};
