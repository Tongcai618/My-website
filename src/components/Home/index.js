import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-T.png';
import './index.scss';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'n', 'g']
    const jobArray = ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i</span>
                    <br />
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={19}
                    />
                </h1>
                <h2>NEU Student / Full-Stack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
            </div>
            <Loader type="pacman" />
            </>
    )
}

export default Home