import EduBuddy from './assets/images/EduBuddy.png';
import Trinetra from './assets/images/Trinetra.png';
import FarmAI from './assets/images/FarmAI.png';
import HeartDisease from './assets/images/Heart_disease.png';
import FoodOrdering from './assets/images/Food_ordering.png';
import Portfolio from './assets/images/Portfolio.png';
import AeroBMSCE from './assets/images/AeroBMSCE.png';
import DigiMelody from './assets/images/DigiMelody.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "EduBuddy",
            category: "AI / Hackathon",
            tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: EduBuddy,
            description:
                "AI-powered personal study assistant that helps students stay focused, track study sessions, and receive intelligent learning support."
        },
        {
            id: 2,
            title: "Trinetra",
            category: "AI / Healthcare",
            tech: ["HTML", "CSS", "JavaScript", "Gemini API", "Twilio"],
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: Trinetra,
            description:
                "AI-powered medical assistant that analyzes symptoms, classifies urgency levels, recommends doctors, and sends appointment reminders."
        },
        {
            id: 3,
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
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: FarmAI,
            description:
                "Smart crop diversification advisor that helps farmers choose profitable crop combinations using weather and market insights."
        },
        {
            id: 4,
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
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: HeartDisease,
            description:
                "Machine learning application that predicts heart disease risk using clinical inputs and provides real-time prediction results."
        },
        {
            id: 5,
            title: "Food Ordering System",
            category: "Unix Shell Project",
            tech: ["Shell Scripting", "Python", "SMTP"],
            github: "YOUR_GITHUB_LINK",
            demo: "",
            image: FoodOrdering,
            description:
                "Automated food ordering system developed using shell scripts and Python with email-based order confirmation."
        },
        {
            id: 6,
            title: "Personal Portfolio",
            category: "Web Development",
            tech: ["React", "CSS", "JavaScript"],
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_PORTFOLIO_LINK",
            image: Portfolio,
            description:
                "Personal portfolio website showcasing projects, skills, achievements, and technical journey with a modern responsive design."
        },
        {
            id: 7,
            title: "AeroBMSCE Website",
            category: "Web Development",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: AeroBMSCE,
            description:
                "Frontend website developed for the AeroBMSCE Web Development Challenge. Features responsive design, project showcases, team information, gallery sections, and interactive UI components."
        },
        {
            id: 8,
            title: "DigiMelody",
            category: "Web Development",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "YOUR_GITHUB_LINK",
            demo: "YOUR_DEMO_LINK",
            image: DigiMelody,
            description:
                "A modern music streaming-inspired web application featuring an intuitive user interface, music discovery experience, responsive layouts, and interactive media controls."
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

                    <a href={project.github}>GitHub</a>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Projects;