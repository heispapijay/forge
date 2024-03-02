import pattern from '../../assets/pattern.svg';
import arrow from '../../assets/arrow.svg';
import './button.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    text: string;
    to: string;
}

export const Button: React.FC<ButtonProps> = ({ text, to }) => {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate(to);
    };

    return (
        <button className='default-btn' onClick={handleClick}>{text} <span className='sphereimage'><img className='pattern' src={pattern} alt="pattern" /><img className='arrow' src={arrow} alt="arrow icon" /></span></button>
    );
};