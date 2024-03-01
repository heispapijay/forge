import "./brand.scss";
import studio from "../../assets/brand/1.svg";
import norto from "../../assets/brand/2.svg";
import pointone from "../../assets/brand/3.svg";
import sandbox from "../../assets/brand/4.svg";
import brnd from "../../assets/brand/5.svg";

export const Brand = () => {
  return (
    <div className="brand">
      <div className="default-wrapper">
        <div className="subheaders">
          <p className="tagline">PARTNERS</p>
          <h1>Our Partners</h1>
          <p className="brand-story">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet amet erat nec nibh rhoncus varius in non lorem pretium viverra suspendisse.</p>
        </div>
        <div className="brand-wrapper">
          <img src={studio} alt="studio green" />
          <img src={norto} alt="norto" />
          <img src={pointone} alt="points one" />
          <img src={sandbox} alt="out of the sandbox" />
          <img src={brnd} alt="brnd" />
        </div>
      </div>
    </div>
  );
};
