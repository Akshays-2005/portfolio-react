import EduBuddy from './assets/images/EduBuddy.png';
import Trinetra from './assets/images/Trinetra.png';
import FarmAI from './assets/images/FarmAI.png';
import HeartDisease from './assets/images/Heart_disease.png';
import FoodOrdering from './assets/images/Food_ordering.png';
import Portfolio from './assets/images/Portfolio.png';
import AeroBMSCE from './assets/images/AeroBMSCE.png';
import DigiMelody from './assets/images/DigiMelody.png';
import OmniFood from './assets/images/OmniFood.png';
import AutoAlignDoc from './assets/images/AutoDoc align.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "EduBuddy",
            category: "AI / Hackathon",
            tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
            github: "https://github.com/Akshays-2005/EduBuddy-Study-Assistant",
            demo: "https://alpha345.pythonanywhere.com/",
            image: EduBuddy,
            description:
                "AI-powered personal study assistant that helps students stay focused, track study sessions, and receive intelligent learning support."
        },
        {
            id: 2,
            title: "FarmAI",
            category: "AI / Agriculture",
            tech: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Python",
                "OpenWeather API",
                "Agmarknet API"
            ],
            github: "https://github.com/Akshays-2005/FarmAI",
            demo: "https://drive.google.com/file/d/1hDVCdpgQGv7_CIusTN8kHLwOAL9gM3WH/view",
            image: FarmAI,
            description:
                "Smart crop diversification advisor that helps farmers choose profitable crop combinations using weather and market insights."
        },
        {
            id: 3,
            title: "Heart Disease Prediction System",
            category: "Machine Learning",
            tech: [
                "Python",
                "Flask",
                "Machine Learning",
                "Random Forest",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            github: "https://github.com/Akshays-2005/Heart-Disease-Risk-Prediction",
            demo: "https://drive.google.com/file/d/1pgbjG-A2f1jVqMUwP4ThTw1foQUmuwVU/view",
            image: HeartDisease,
            description:
                "Machine learning application that predicts heart disease risk using clinical inputs and provides real-time prediction results."
        },
        {
            id: 4,
            title: "Food Ordering System",
            category: "Unix Shell Project",
            tech: ["Shell Scripting", "Python", "SMTP"],
            github: "https://github.com/Akshays-2005/Unix-Food-Ordering-System",
            demo: "https://drive.google.com/file/d/1Mbup_4uWJNJFmxlwL8GmeAoZHUlhpI4z/view",
            image: FoodOrdering,
            description:
                "Automated food ordering system developed using shell scripts and Python with email-based order confirmation."
        },
        {
            id: 5,
            title: "Personal Portfolio",
            category: "Web Development",
            tech: ["React", "CSS", "JavaScript"],
            github: "https://github.com/Akshays-2005/portfolio-react",
            demo: "https://akshay-portfolio-react.netlify.app/",
            image: Portfolio,
            description:
                "Personal portfolio website showcasing projects, skills, achievements, and technical journey with a modern responsive design."
        },
        {
            id: 6,
            title: "AeroBMSCE Website",
            category: "Web Development",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Akshays-2005/AeroBMSCE-Website",
            demo: "https://aerobmscewebsite.netlify.app/",
            image: AeroBMSCE,
            description:
                "Frontend website developed for the AeroBMSCE Web Development Challenge. Features responsive design, project showcases, team information, gallery sections, and interactive UI components."
        },
        {
            id: 7,
            title: "AutoAlign Doc",
            category: "Document Automation / Frontend",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Akshays-2005/autoscan-pro",
            demo: "https://autoalign-doc.netlify.app/",
            image: AutoAlignDoc,
            description:
                "Document formatting automation tool designed to simplify content alignment, improve consistency, and streamline structured document creation through an intuitive web interface."
        },
        {
            id: 8,
            title: "OmniFood",
            category: "Frontend Practice Project",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Akshays-2005/OmniFood",
            demo: "https://omni-food-killer-website.netlify.app/",
            image: OmniFood,
            description:
                "Responsive food delivery landing page built while learning frontend development, focusing on modern UI design, layouts, and responsive web practices."
        },
        {
            id: 9,
            title: "DigiMelody",
            category: "Web Development",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Akshays-2005/DigiMelody",
            demo: "https://drive.google.com/file/d/1e_CyeuOBubThx5UsDMchBBM730wk8LrB/view?usp=sharing",
            image: DigiMelody,
            description:
                "A modern music streaming-inspired web application featuring an intuitive user interface, music discovery experience, responsive layouts, and interactive media controls."
        },
        {
            id: 10,
            title: "Trinetra",
            category: "AI / Healthcare",
            tech: ["HTML", "CSS", "JavaScript", "Gemini API", "Twilio"],
            github: "https://github.com/Akshays-2005/Trinetra-AI-Medical-Assistant",
            demo: "https://trinetra2.netlify.app/",
            image: Trinetra,
            description:
                "AI-powered medical assistant that analyzes symptoms, classifies urgency levels, recommends doctors, and sends appointment reminders."
        }
    ];

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>

                        <div className="links">
                            <a href={project.github}>GitHub</a>
                            {project.demo && <a href={project.demo}>Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;