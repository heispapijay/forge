import pattern from '../../assets/pattern.svg';
import arrow from '../../assets/arrow.svg';
import './button.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className='default-btn' onClick={onClick}>{text} <span className='sphereimage'><img className='pattern' src={pattern} alt="pattern" /><img className='arrow' src={arrow} alt="arrow icon" /></span></button>
    );
};