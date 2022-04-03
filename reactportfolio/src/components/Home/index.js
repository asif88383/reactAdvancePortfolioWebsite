import { useEffect, useState } from "react";
import Loader from "react-loader";
import {Link} from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    const nameArray = ['A', 'S','I','F'];
    const jobArray = ['R','E','A','C', 'T',' ','P','R','O','G','R','A','M','M','E','R'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);
    }, []);

    return (
        <>
            <div className="home-page container">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={ `${letterClass} _12`}>i,</span>
                        <br />
                        <span className={ `${letterClass} _13`}>I</span>
                        <span className={ `${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="Mern Stack Developer Asif"
                        />

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>

                    <h2>MERN Stack Developer | React Developer | Python Programmer</h2>
                    <Link to="/contact" className="flat-button">
                        Contact Me
                    </Link>
                </div>
                <Logo />
            </div>

            <Loader type="paceman" />
        </>
    );
}

export default Home;