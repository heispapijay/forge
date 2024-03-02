import { Button } from "../Button/Button";
import './cta.scss';

export const CTA = () => {
  return (
    <div>
      <div className="default-wrapper">
        <div className="cta-holder">
          <div className="subheaders">
            <p className="tagline">Connect with us</p>
            <h1>Let's create your next big idea.</h1>
          </div>
          <Button text="Get in touch" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
