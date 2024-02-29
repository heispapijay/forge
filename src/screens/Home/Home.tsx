import "./home.scss";
import arrow from "../../assets/arrow.svg";
import scrolldown from "../../assets/scrolldown.svg";
import { Hero, Meetus } from "../../containers";

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="scroll-wrapper">
        <a className="scroll-down">
          <img className="scroll-img pattern" src={scrolldown} alt="" />
          <div className="icon-cover">
            <img className="down-arrow" src={arrow} alt="arrow icon" />
          </div>
        </a>
      </div>
      <Meetus />
    </div>
  );
};
