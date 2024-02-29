import { ServiceCard } from "../../components";
import webdesign from "../../assets/Img.png";
import "./project.scss";

export const Project = () => {
  return (
    <div className="project-section">
      <div className="default-wrapper">
        <div className="subheaders">
          <p className="tagline">Meet Forge</p>
          <h1>Unlock Revenue Growth for Your Business</h1>
        </div>
        <div className="content">
          <ServiceCard
            title="Web Design"
            hoverImg={webdesign}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />

          <ServiceCard
            title="Web Design"
            hoverImg={webdesign}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />

          <ServiceCard
            title="Web Design"
            hoverImg={webdesign}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />
        </div>
        <div className="section-area">
          <div className="subheaders">
            <p className="tagline">Meet Forge</p>
            <h1>We Work to Craft Solid Products & Project For You</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
