import { PageBanner, WorkCard } from "../../components";
import "./work.scss";

import project1 from "../../assets/project/01.webp";
import project2 from "../../assets/project/02.webp";
import project3 from "../../assets/project/03.webp";
import project4 from "../../assets/project/04.webp";
import project5 from "../../assets/project/05.webp";
import Marquee from "react-fast-marquee";

export const Work = () => {
  return (
    <div className="work-screen">
      <PageBanner
        title="Our Work"
        content="Whereby is the super simple way to connect over video. No downloads or long having into meeting links."
      />
      <div className="our-latest">
        {/* <p className="work-text">Our Latest</p> */}
        <img className="latest-work" src={project2} alt="latest image" />
        {/* <p className="work-text2">Project</p> */}
        <Marquee>
          <p className="work-text">
            Our Latest Work Our Latest Work Our Latest Work
          </p>
        </Marquee>
      </div>
      <div className="project-section">
        <div className="default-wrapper">
          <div className="section-area">
            <div className="subheaders">
              <p className="tagline">Meet Forge</p>
              <h1>We Work to Craft Solid Products & Project For You</h1>
            </div>
            <div className="our-work">
              <div className="left-side">
                <WorkCard
                  title="John Walter Concept"
                  tag="Design"
                  image={project1}
                />
                <WorkCard title="Hazard 1990" tag="Branding" image={project2} />
                <WorkCard title="Hazard 1990" tag="Branding" image={project3} />
              </div>
              <div className="right-side">
                <WorkCard title="Pluto" tag="Development" image={project4} />
                <WorkCard title="Bubox" tag="Design" image={project5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
