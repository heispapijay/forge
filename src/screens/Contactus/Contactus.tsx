import { PageBanner } from "../../components";
import "./contactus.scss";

export const Contactus = () => {
  return (
    <div className="contact-screen">
      <div className="default-wrapper">
        <PageBanner
          title="Contact Us"
          content="We'll never push extras that don't make sense for your brand just to make a quick buck. Our pricing policy is as transparent as our process."
        />
      </div>
    </div>
  );
};
