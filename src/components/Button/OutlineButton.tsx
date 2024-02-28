import pattern from '../../assets/pattern.svg';
import arrow from '../../assets/arrow.svg';
import './button.scss';

interface OutlineButtonProps {
    text: string;
    onClick: () => void;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({ text, onClick }) => {
  return (
    <button className='default-btn outline' onClick={onClick}>{text} <span className='sphereimage'><img className='pattern' src={pattern} alt="pattern" /><img className='arrow' src={arrow} alt="arrow icon" /></span></button>
  )
}
