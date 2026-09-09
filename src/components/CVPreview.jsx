function formatDate(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    const [year, month, day] = parts;
    return `${month}/${day}/${year}`;
}

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
                        <div className="cv-item-header">
                            <h3>{edu.schoolName}</h3>
                            {(edu.startDate || edu.endDate) && (
                                <span className="cv-dates">
                                    {formatDate(edu.startDate)}{edu.startDate && edu.endDate ? ' - ' : ''}{formatDate(edu.endDate)}
                                </span>
                            )}
                        </div>
                        {edu.description && <p>{edu.description}</p>}
                    </div>
                ))}
            </section>

            <section className="cvSection">
                <h2>Practical Experience</h2>
                {experiences.map((exp) => (
                    <div key={exp.id} className="cv-item">
                        <div className="cv-item-header">
                            <h3>{exp.title}{exp.title && exp.expName ? ' | ' : ''}{exp.expName}</h3>
                            {(exp.startDate || exp.endDate) && (
                                <span className="cv-dates">
                                    {formatDate(exp.startDate)}{exp.startDate && exp.endDate ? ' - ' : ''}{formatDate(exp.endDate)}
                                </span>
                            )}
                        </div>
                        {exp.description && <p>{exp.description}</p>}
                    </div>
                ))}
            </section>

        </div>
    );
}