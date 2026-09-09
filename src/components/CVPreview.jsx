export default function CVPreview({ basicInfo, educations, experiences }) {
    return (
        <div className="cvDocument">
            <header className="cvHeader">
                <h1>{basicInfo.name || 'your name'} </h1>
                <p>{basicInfo.email || 'email'} | {basicInfo.phone || 'phone number'}</p>
            </header>

            <section className='cvSection'>
                <h2> Education </h2>
                {educations.map((edu) => (
                    <div key={edu.id} className="cv-item">
                        <h3>{edu.schoolName}</h3>
                        <p>{edu.description}</p>
                        <p>{edu.startDate}-{edu.endDate}</p>
                    </div>
                ))}
            </section>

            <section className="cvSection">
                <h2>Practical Experience</h2>
                {experiences.map((exp) => (
                    <div key={exp.id} className="cv-item">
                        <h3>{exp.title} at {exp.expName}</h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>

        </div>)
}