import Marquee from "react-fast-marquee";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import "./carousel.scss";

export const Carousel = () => {
  return (

    <div className="caro">
        <div className="overlay">
            <img className="whitecover-top" src={top} alt="whitespace" />
            <img className="whitecover-bottom" src={bottom} alt="whitespace" />        </div>
        <div className="carousel-container">
         <Marquee>
           <div className="image1"></div>
           <div className="image2"></div>
           <div className="image3"></div>
           <div className="image4"></div>
           <div className="image5"></div>
        </Marquee>
      </div>
    </div>
  );
};
