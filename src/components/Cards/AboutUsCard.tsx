import './cards.scss';

interface AboutUsCardProps {
    title: string;
    text: string;
}

export const AboutUsCard: React.FC<AboutUsCardProps> = ({title, text}) => {
  return (
    <div className="about-us-card">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}
