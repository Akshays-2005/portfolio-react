import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav">
                <div className="logo">Akshay</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/certificates">Certificates</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;