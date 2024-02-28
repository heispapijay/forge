import React from "react";
import "./banner.scss";
import Typed from "typed.js";
import { Button } from "../Button/Button";

export const Banner = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Realm", "Level", "Tier"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="display-text">
        <div className="text">
          <h1>Take it to</h1>
          <div className="side-piece">
            <h1>the Creative</h1>
            <div className="sphere-image"></div>
            <h1 className="typing-efx">
              <span className="typing-effect" ref={el} />
            </h1>
          </div>
        </div>
        <p className="subtext">
          High-end <span>digital experiences</span>. Created at the heart of Manhattan, we
          are a human-sized team.
        </p>
        <Button text="Say Hello" onClick={() => {}} />
      </div>
    </div>
  );
};
