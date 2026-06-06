

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav">
                <div className="logo">Akshay</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/certificates">Certificates</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;