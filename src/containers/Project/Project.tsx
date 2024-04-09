import { ServiceCard, WorkCard } from "../../components";
import branding from "../../assets/serviceimg/01.webp";
import design from "../../assets/serviceimg/02.webp";
import developement from "../../assets/serviceimg/03.webp";
import arrow from "../../assets/arrow.svg";
import "./project.scss";
import { Link } from "react-router-dom";
import { Project, projects } from "../../utils/data/projectData";

export const MyProject = () => {  

  const leftProjects: Project[] = projects.slice(0, 3);
  const rightProjects: Project[] = projects.slice(3);

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
              <div className="view-more">
                <span className="sphereimage">
                  <svg
                    className="change-color pattern"
                    width="200"
                    height="200"
                    viewBox="0 0 216 215"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100.205 2.8449C104.769 -0.0344826 110.582 -0.0344805 115.146 2.8449L121.415 6.80015C124.435 8.70554 128.069 9.38486 131.573 8.69912L138.848 7.27566C144.144 6.23939 149.564 8.33911 152.779 12.6727L157.196 18.6256C159.324 21.4933 162.468 23.4395 165.983 24.066L173.281 25.3666C178.593 26.3134 182.889 30.2293 184.322 35.4318L186.29 42.5783C187.238 46.021 189.466 48.9713 192.518 50.8255L198.853 54.6744C203.465 57.4764 206.056 62.6796 205.513 68.0485L204.766 75.4234C204.407 78.9762 205.419 82.5321 207.595 85.3635L212.111 91.241C215.4 95.5198 215.936 101.307 213.49 106.118L210.13 112.725C208.511 115.908 208.17 119.589 209.176 123.015L211.265 130.128C212.786 135.305 211.195 140.896 207.176 144.498L201.657 149.445C198.997 151.829 197.35 155.138 197.05 158.696L196.428 166.083C195.976 171.46 192.473 176.099 187.425 178.005L180.49 180.625C177.15 181.887 174.418 184.377 172.853 187.587L169.605 194.25C167.241 199.101 162.299 202.161 156.903 202.115L149.49 202.053C145.919 202.023 142.472 203.358 139.854 205.786L134.418 210.826C130.461 214.495 124.747 215.563 119.732 213.571L112.843 210.835C109.524 209.517 105.827 209.517 102.508 210.835L95.6189 213.571C90.6036 215.563 84.89 214.495 80.9329 210.826L75.4973 205.786C72.8787 203.358 69.4313 202.023 65.8605 202.053L58.4482 202.115C53.0521 202.161 48.1102 199.101 45.7457 194.25L42.4977 187.587C40.933 184.377 38.2009 181.887 34.8603 180.625L27.9259 178.005C22.8778 176.099 19.3749 171.46 18.9224 166.083L18.3007 158.696C18.0012 155.138 16.3533 151.829 13.6942 149.445L8.17427 144.498C4.15582 140.896 2.56515 135.305 4.08565 130.128L6.17425 123.015C7.18041 119.589 6.8393 115.908 5.22069 112.725L1.86078 106.118C-0.585223 101.307 -0.0489073 95.5198 3.2393 91.241L7.75611 85.3635C9.93204 82.5321 10.9438 78.9762 10.5843 75.4234L9.83814 68.0485C9.29493 62.6796 11.8858 57.4764 16.4976 54.6744L22.8326 50.8255C25.8844 48.9713 28.1124 46.021 29.0606 42.5783L31.029 35.4318C32.4619 30.2293 36.7574 26.3134 42.07 25.3666L49.3676 24.066C52.8832 23.4395 56.0264 21.4933 58.1543 18.6256L62.5713 12.6727C65.7869 8.33912 71.2069 6.23939 76.5028 7.27566L83.7774 8.69912C87.2819 9.38486 90.9159 8.70554 93.936 6.80015L100.205 2.8449Z"
                      fill="white"
                    />
                  </svg>

                  <div className="center-viewmore">
                    <p>
                      View <br /> All Projects
                    </p>
                    <img className="arrow" src={arrow} alt="arrow icon" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
