import "./cards.scss";

interface ReviewCardProps {
  review: string;
  icon: string;
  name: string;
  position: string;
  avatar: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  icon,
  name,
  position,
  avatar,
}) => {
  return (
    <div className="review-card">
      <div className="review">
        <p>{icon}</p>
        <p>{review}</p>
      </div>
      <span className='linebreak'></span>
      <div className="user">
        <div className="avatar">
          <img src={avatar} alt="user avatar" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};
