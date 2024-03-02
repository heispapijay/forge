import { OutlineButton } from "../Button/OutlineButton";
import "./about.scss";

export const About = () => {
  return (
    <div className="about-section">
      <div className="about-wrapper">
        <div className="title-left">
          <p className="tagline">Meet Forge</p>
          <h1>What we do</h1>
        </div>
        <div className="right-about">
          <p>
            High-end digital experiences. Created<br/> at the heart of Manhattan, we
            are a should human team. <br/><br/>The driving force of all speeches, we
            believe that creation should be the point around which any strategy
            revolves.
          </p>
          <OutlineButton text="See Our Process" to="/about" />
        </div>
      </div>
    </div>
  );
};
