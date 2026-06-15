import HackaphasiaWinner from './assets/images/Hackaphasia winner.png';
import AnvayaPitchingCompetition from './assets/images/Anvaya pitching.png';
import AdobeIndiaHackathon from './assets/images/Adobe India Hackathon.png';
import JSSNavotthanaHackathon from './assets/images/JSS hackathon.jpg';
import ArtificialIntelligenceFoundation from './assets/images/Artificial Intelligence Foundation.png';
import IBMSkillsBuildHackathon from './assets/images/IBM hackathon.png';
import IlluminateWorkshop from './assets/images/Illuminate workshop.png';
import MentorBeginnerHackathon from './assets/images/Mentor beginner hackathon.png';
import NECFinalist from './assets/images/NEC Finalist.png';


const Certificates = () => {

    const certificates = [
        {
            id: 1,
            title: "Hackaphasia Winner",
            issuer: "BMSCE",
            date: "September 2025",
            imageUrl: HackaphasiaWinner,
            description: "Secured 1st place in Agritech Domain at Hackaphasia 3.0.",
            link:"https://drive.google.com/file/d/1Yi7lHbnSrC1PZoHvTNmt1iW_dMDuOqXH/view"
        },
        {
            id: 2,
            title: "Anvaya Pitching Competition",
            issuer: "NEC",
            date: "August 2025",
            imageUrl: AnvayaPitchingCompetition,
            description: "Secured 3rd place in the pitching competition organized by E-cell BMSCE.",
            link:"https://drive.google.com/file/d/13dAT0B_lvxIH5V4AyejVG7h4226QOwo0/view"
        },
        {
            id: 3,
            title: "Adobe India Hackathon Round 1",
            issuer: "Adobe",
            date: "2025",
            imageUrl: AdobeIndiaHackathon,
            description: "Participated in Round-1 of the Adobe India Hackathon 2025.",
            link:"https://drive.google.com/file/d/12Gp6k-cR7IvB2pvgeXk5FRMaCRjbM3Mu/view"
        },
        {
            id: 4,
            title: "JSS Navotthana Hackathon",
            issuer: "JSSATE",
            date: "March 2025",
            imageUrl: JSSNavotthanaHackathon,
            description: "Participated in the JSS Navotthana Hackathon 2025.",
            link:"https://drive.google.com/file/d/17UiuK8ZMl0Varye0jtsrkifSfMAIMtcf/view?usp=sharing"
        },
        {
            id:5,
            title: "Artificial Intelligence Foundation",
            issuer: "Infosys Springboard",
            date: "November 2025",
            imageUrl: ArtificialIntelligenceFoundation ,
            description: "Completed the Artificial Intelligence Foundation course.",
            link:"https://drive.google.com/file/d/1yQrgWClJ41jCWUfKfYwFOfZ5tpCBALzx/view?usp=sharing"
        },
        {
            id:6,
            title: "IBM SkillsBuild Hackathon integrated Guided Learning Experience",
            issuer: "IBM x edunet foundation",
            date: "February 2026",
            imageUrl: IBMSkillsBuildHackathon,
            description: "Participated in the IBM SkillsBuild Hackathon integrated Guided Learning Experience.",
            link:"https://drive.google.com/file/d/1B2z6UV6BEcDIakUw-I2xWRMwx7jn05_8/view?usp=sharing"
        },
        {
            id:7,
            title: "Organising Illuminate workshop",
            issuer: "eCell IITB",
            date: "October 2025",
            imageUrl: IlluminateWorkshop,
            description: "Organized a workshop Illuminate as part of the eCell IITB initiative.",
            link:"https://drive.google.com/file/d/14Zw8Hp-dyq3_S2weHS-vQxrypGBzyQoL/view?usp=sharing"
        },
        {
            id:8,
            title: "Mentor - The Beginner Hackathon",
            issuer: "Protocol - BMSCE",
            date: "March 2026",
            imageUrl: MentorBeginnerHackathon,
            description: "Mentored in The Beginner Hackathon organized by Protocol club of BMSCE.",
            link:"https://drive.google.com/file/d/1okZkJ3lXqwfvsMMsqe6PTBDAYjbmBkfH/view?usp=sharing"
        },
        {
            id:9,
            title: "NEC Finalist",
            issuer: "NEC",
            date: "2025",
            imageUrl: NECFinalist,
            description: "Team secured 57th rank at National level in the NEC 2025 competition.",
            link:"https://drive.google.com/file/d/1Waj4apDd7Sx-nIvE06I28yDXb8yAEqXJ/view"
        }
    ]

return (
    <div className="certificates">
        <h2>Certificates</h2>
        <p>A collection of certifications and achievements that reflect my continuous learning journey.</p>
        <div className="certificate-container">
            {certificates.map((cert) => (
                <div className="certificate" key={cert.id}>
                    <div className="certificate-image">
                        <img src={cert.imageUrl} alt={cert.title} />
                    </div>

                    <div className="certificate-details">
                        <h3>{cert.title}</h3>
                        <p>Issuer: {cert.issuer}</p>
                        <p>Date: {cert.date}</p>
                        <p>{cert.description}</p>
                        <a href={cert.link} target="_blank" rel="noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Certificates;