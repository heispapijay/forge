import { ReviewCard } from "../../components";
import image1 from "../../assets/02.png";
import "./review.scss";

export const Review = () => {
  return (
    <div className="review-section">
        <div className="default-wrapper">
        <div className="title-left">
          <p className="tagline">Meet Forge</p>
          <h1>What we do</h1>
        </div>
        <div className="review-container">
        <ReviewCard
            review="High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."
            icon="⭐⭐⭐⭐⭐"
            name="John Doe"
            position="CEO, Example.com"
            avatar={image1}
         />
        <ReviewCard
            review="High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."
            icon="⭐⭐⭐⭐⭐"
            name="John Doe"
            position="CEO, Example.com"
            avatar={image1} />

        <ReviewCard
            review="High-end digital experiences. Created the heart Manhattan, we are a should human team driving force."
            icon="⭐⭐⭐⭐⭐"
            name="John Doe"
            position="CEO, Example.com"
            avatar={image1} />
        </div>
        </div>
        
    </div>
  )
}
