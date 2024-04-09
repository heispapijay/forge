import { useEffect, useState } from "react";
import "./singleworkpage.scss";
import arrow from "../../assets/arrow.svg";
import scrolldown from "../../assets/scrolldown.svg";
import { PageBanner } from "../../components";
import { useParams } from "react-router-dom";
import { Project, projects } from "../../utils/data/projectData"

export const SingleWorkPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const selectedProject = projects.find(
        (project) => project.id === parseInt(id)
      );
      if (selectedProject) {
        setProject(selectedProject);
      } else {
        console.error("Project not found for id:", id);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="single-work-page">
      <div className="default-wrapper">
        <PageBanner title={project.title} content={project.content} />
        <div className="single-work">
          <div className="scroll-wrapper">
            <a className="scroll-down">
              <img className="scroll-img pattern" src={scrolldown} alt="" />
              <div className="icon-cover">
                <img className="down-arrow" src={arrow} alt="arrow icon" />
              </div>
            </a>
          </div>
          <div className="single-work-img-width">
            <img
              className="single-work-img"
              src={project.image}
              alt="project image"
            />
          </div>
          <div className="work-outline">
            <div className="work-summary">
              <h2>Summary</h2>
              <p>{project.contentSummary}</p>
            </div>
            <div className="things-done">
              <h3>What we've done</h3>
              <ol>
                <li>Collaboration with {project.title}</li>
                <li>Strategic Discovery</li>
                <li>Brand Identity Development</li>
                <li>Extensive Research</li>
                <li>Digital Presence Revamp</li>
              </ol>
            </div>
            <div className="levels">
              <h3>Levels asked as to help</h3>
              <ul>
                <li>Brand Modernization</li>
                <li>Digital Experience Enhancement</li>
                <li>Strategic Consultation</li>
              </ul>
            </div>
            <p className="conclusion">
              Each project at Forge Creative Agency is a testament to our
              commitment to excellence and innovation. By combining strategic
              insight with creative vision, we transform concepts into
              compelling realities that resonate with audiences and drive
              tangible results. Our collaborative approach ensures that every
              project is tailored to meet the unique objectives and challenges
              of our clients, resulting in impactful solutions that stand the
              test of time. As we continue to push the boundaries of creativity
              and technology, we remain dedicated to delivering exceptional
              outcomes that exceed expectations and inspire success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
