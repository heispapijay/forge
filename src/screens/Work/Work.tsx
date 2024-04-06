import React, { useState, useEffect } from "react";
import { PageBanner, WorkCard } from "../../components";
import "./work.scss";
import Marquee from "react-fast-marquee";
import project2 from "/project/02.webp";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // State to store project data

  useEffect(() => {
    // Fetch project data from JSON file
    fetch("/workData.json")
      .then((response) => response.json())
      .then((data: { projects: Project[] }) => {
        setProjects(data.projects); // Set project data to state
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  // Divide projects into left and right sections
  const leftProjects: Project[] = projects.slice(0, 3);
  const rightProjects: Project[] = projects.slice(3);

  return (
    <div className="work-screen">
      <PageBanner
        title="Our Work"
        content="Whereby is the super simple way to connect over video. No downloads or long having into meeting links."
      />
      <div className="our-latest">
        <img className="latest-work" src={project2} alt="latest image" />
        <Marquee>
          <p className="work-text">
            Our Latest Work &nbsp; Our Latest Work &nbsp; Our Latest Work &nbsp; Our Latest Work
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
                {leftProjects.map((project) => (
                  <Link key={project.id} to={`/work/${project.id}`}>
                    <WorkCard
                      title={project.title}
                      tag={project.content}
                      image={project.image}
                    />
                  </Link>
                ))}
              </div>
              <div className="right-side">
                {rightProjects.map((project) => (
                  <Link key={project.id} to={`/work/${project.id}`}>
                    <WorkCard
                      title={project.title}
                      tag={project.content}
                      image={project.image}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
