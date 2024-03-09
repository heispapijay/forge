import { AboutUsCard } from "../../components";
import "./aboutus.scss";

export const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="default-wrapper">
      <div className="about-container">
      <div className="aboutus-left">
        <div className="subheaders">
          <p className="tagline">Meet Forge</p>
          <h1>Why Choose Forge</h1>
          <p>
            Lorem ipsum dolor sit amet ut sem adipiscing elit. Suspendisse
            varius enim in tristique.
          </p>
        </div>
        <div className="aboutus-img"></div>
      </div>
      <div className="aboutus-right">
        <AboutUsCard
          title="What we do"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />

        <AboutUsCard
          title="What we do"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />

        <AboutUsCard
          title="What we do"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
      </div>
      </div>
      </div>
    </div>
  );
};
