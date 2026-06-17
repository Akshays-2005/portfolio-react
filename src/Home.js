import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from "./assets/images/profile.jpg"

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="hero-left">
                    <h2>Akshay S</h2>
                    <p>Full Stack Developer | AI Enthusiast | Problem Solver</p>
                    <div className="links">
                        <a className="resume-btn" href="https://drive.google.com/file/d/12mNvhN60IRziItLe5Q7qcoiHJcmHgByV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a href="https://github.com/Akshays-2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub" ><FaGithub size={35} className="social-icon" /></a>
                        <a href="https://www.linkedin.com/in/akshay-s-962494354/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" ><FaLinkedinIn size={35} className="social-icon linkedin" /></a>
                        <a href="https://leetcode.com/u/Akshays-2005/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" ><SiLeetcode size={35} className="social-icon leetcode" /></a>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={profileImage} alt="Akshay S" className="profile-image" />
                </div>
            </div>
            <div className="intro">
                <h2>Welcome to my portfolio!</h2>
                <p>I'm a Computer Science student at BMSCE passionate about full-stack development, AI applications, and problem solving. I enjoy building projects that solve real-world problems and participating in hackathons.</p>
            </div>
        </div>
    );
}

export default Home;