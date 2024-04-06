import { useEffect, useState } from "react";
import "./singleworkpage.scss";
import arrow from "../../assets/arrow.svg";
import scrolldown from "../../assets/scrolldown.svg";
import { PageBanner } from "../../components";
import { useParams } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  content: string;
  contentSummary: string;
  image: string;
}

export const SingleWorkPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch('/workData.json')
        .then(response => response.json())
        .then((data: { projects: Project[] }) => {
          // Find the project with the matching id
          const selectedProject = data.projects.find(project => project.id === parseInt(id));
          if (selectedProject) {
            setProject(selectedProject);
          } else {
            console.error("Project not found for id:", id);
          }
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch(error => {
          console.error("Error fetching project data:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (!project) {
    return <div>Project not found</div>; // Display message if project not found
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
            <img className="single-work-img" src={project.image} alt="project image" />
          </div>
          <div className="work-outline">
            <div className="work-summary">
              <h2>Summary</h2>
              <p>{project.contentSummary}</p>
            </div>
            <div className="things-done">
              <h3>What we've done</h3>
              <ol>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
              </ol>
            </div>
            <div className="levels">
                <h3>Levels asked as to help</h3>
              <ul>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
                <li>Strategic Discovery</li>
              </ul>
            </div>
            <p className="conclusion">
              Creating a landing page with clear and targeted messaging was a
              crucial step in increasing conversions. Together with the Webflow
              team, we have compiled a new product page structure using the AIDA
              model and packed that in a nice cover{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
