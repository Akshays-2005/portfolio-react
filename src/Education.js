const Education = () => {

    const education = [
        {
            id: 1,
            institution: "BMS College of Engineering",
            degree: "B.E. in Computer Science and Engineering",
            duration: "2023 - 2027",
            score: "CGPA: 9.364",
            Achievements: [
                "Secured 1st place in Hackaphasia Hackathon",
                "Secured 3rd place in Anvaya pitching competition",
                "NEC Finalist - Secured 57th place at national level"
            ]
        },
        {
            id: 2,
            institution: "Sir MV PU College",
            degree: "Pre-University Education",
            duration: "2021 - 2023",
            score: "Percentage: 98%",
            Achievements: [
                "666 rank in KCET 2023",
                "98.99 percentile in JEE Mains 2023",
            ]
        },
        {
            id: 3,
            institution: "St. Mary's Convent High School",
            degree: "SSLC",
            duration: "2020 - 2021",
            score: "Percentage: 99.36%"
            // Achievements: [
            //     "xyz"
            // ]
        }
    ]

    return (
        <div className="education">
            <h2>Education</h2>

            {education.map((edu) => {
                return (
                    <div key={edu.id} className="education-card">
                        <h3>{edu.institution}</h3>
                        <p><strong>{edu.degree}</strong></p>
                        <p>{edu.duration}</p>
                        <p>{edu.score}</p>

                        {edu.Achievements && (
                            <ul>
                                {edu.Achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Education;