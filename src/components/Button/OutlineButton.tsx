import pattern from '../../assets/pattern.svg';
import arrow from '../../assets/arrow.svg';
import './button.scss';
import { useNavigate } from 'react-router-dom';

interface OutlineButtonProps {
    text: string;
    to: string;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();
    const handleClick = () => {
    navigate(to);
    };
  return (
    <button className='default-btn outline' onClick={handleClick}>{text} <span className='sphereimage'><img className='pattern' src={pattern} alt="pattern" /><img className='arrow' src={arrow} alt="arrow icon" /></span></button>
  )
}
