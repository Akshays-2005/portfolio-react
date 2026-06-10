const Skills = () => {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="languages">
                <h3>Languages</h3>
                <ul className="skills-list">
                    <li className="skill-item">C</li>
                    <li className="skill-item">C++</li>
                    <li className="skill-item">Python</li>
                    <li className="skill-item">Java</li>
                </ul>
            </div>
            <div className="frontend">
                <h3>Frontend Technologies</h3>
                <ul className="skills-list">
                    <li className="skill-item">HTML</li>
                    <li className="skill-item">CSS</li>
                    <li className="skill-item">JavaScript</li>
                    <li className="skill-item">React</li>
                    <li className="skill-item">Bootstrap</li>
                </ul>
            </div>
            <div className="backend">
                <h3>Backend Technologies</h3>
                <ul className="skills-list">
                    <li className="skill-item">Node.js</li>
                    <li className="skill-item">Express</li>
                    <li className="skill-item">Flask</li>
                </ul>
            </div>
            <div className="db">
                <h3>Databases</h3>
                <ul className="skills-list">
                    <li className="skill-item">MySQL</li>
                    <li className="skill-item">MongoDB</li>
                </ul>
            </div>
            <div className="tools">
                <h3>Tools</h3>
                <ul className="skills-list">
                    <li className="skill-item">Git</li>
                    <li className="skill-item">Github</li>
                    <li className="skill-item">VS Code</li>
                    <li className="skill-item">Postman</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Skills;