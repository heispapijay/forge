import React from "react";
import Marquee from "react-fast-marquee";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import "./carousel.scss";

export const Carousel = () => {
  return (
    // <div className="carousel">
    //   <div className="whitecover-top"></div>
    //   <div className="carousel-container">
    //     <Marquee>
    //       <div className="image1"></div>
    //       <div className="image1"></div>
    //       <div className="image1"></div>
    //       <div className="image1"></div>
    //       <div className="image1"></div>
    //     </Marquee>
    //   </div>
    //   <div className="whitecover-bottom"></div>
    // </div>

    <div className="caro">
        <div className="overlay">
            <img className="whitecover-top" src={top} alt="whitespace" />
            <img className="whitecover-bottom" src={bottom} alt="whitespace" />

        {/* <div className="whitecover-top"></div>
        <div className="whitecover-bottom"></div> */}
        </div>
        <div className="carousel-container">
         <Marquee>
           <div className="image1"></div>
           <div className="image1"></div>
           <div className="image1"></div>
           <div className="image1"></div>
           <div className="image1"></div>
        </Marquee>
      </div>
    </div>
  );
};
