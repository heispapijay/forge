import { ServiceCard, WorkCard } from "../../components";
import webdesign from "../../assets/serviceimg/01.webp";
import branding from "../../assets/serviceimg/01.webp";
import design from "../../assets/serviceimg/02.webp";
import developement from "../../assets/serviceimg/03.webp";
import project1 from "../../assets/project/01.gif";
import project2 from "../../assets/project/02.webp";
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
            title="Branding"
            hoverImg={branding}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />

          <ServiceCard
            title="Web Design"
            hoverImg={design}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />

          <ServiceCard
            title="Development"
            hoverImg={developement}
            text="High-end digital experiences. Created the heart Manhattan, we are a
    should human team driving force."
          />
        </div>
        <div className="section-area">
          <div className="subheaders">
            <p className="tagline">Meet Forge</p>
            <h1>We Work to Craft Solid Products & Project For You</h1>
          </div>
          <div className="our-work">
            <div className="left-side">
            <WorkCard title="John Walter Concept" tag="Design" image={project1} />
            <WorkCard title="Hazard 1990" tag="Branding" image={project2} />
            <WorkCard title="Hazard 1990" tag="Branding" image={webdesign} />
            </div>
            <div className="right-side">
            <WorkCard title="Web Design" tag="Web Design" image={webdesign} />
            <WorkCard title="Web Design" tag="Web Design" image={webdesign} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
