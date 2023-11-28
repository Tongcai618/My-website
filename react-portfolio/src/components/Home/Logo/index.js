import './index.scss';
import logoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react';
const Logo = () => {
    const bgRef = useRef();
    const outlinelogoRef = useRef();
    const solidLogoref = useRef();

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={logoS} alt="S" />
            <svg
                width="559pt"
                height="897pt"
                version='1.0'
                viewBox='0 0 559 897'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g
                    className='svg-container'
                    transform='translate(0 457) scale(.1 -.1)'
                    fill='none'
                >
                    <path
                        d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-6-60-145-137" />
                </g>
            </svg>
        </div>
    )
}

export default Logo