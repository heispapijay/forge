import { Blognew } from "../../components";
import "./blogsection.scss";

export const BlogSection = () => {
  return (
    <div className="blogsection">
      <div className="default-wrapper">
        <div className="subheaders">
          <p className="tagline">Blog</p>
          <h1>Latest News & Blogs</h1>
        </div>
        <div className="main-container">
          <Blognew
            date="July 20, 2021"
            tag="Business"
            title="How To Keep The Motivation Up When There Is No Client Work"
            blogImg="https://via.placeholder.com/300"
          />

          <Blognew
            date="July 20, 2021"
            tag="Technology"
            title="How To Keep The Motivation Up When There Is No Client Work"
            blogImg="https://via.placeholder.com/300"
          />

          <Blognew
            date="July 20, 2021"
            tag="Technology"
            title="How To Keep The Motivation Up When There Is No Client Work"
            blogImg="https://via.placeholder.com/300"
          />
        </div>
      </div>
    </div>
  );
};
