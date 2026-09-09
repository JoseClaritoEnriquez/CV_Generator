import { useState } from 'react';

export default function EducInfo({ data, onAdd }) {
    const [educInfo, setEducInfo] = useState([{
        id: crypto.randomUUID(),
        schoolName: '',
        description: '',
        startDate: '',
        endDate: '',
    }]);


    return (
        <div className="form-section">
            <form onSubmit={handleSubmit}>
                <label>Instituion Name:
                    <input type="text" value={educInfo.schoolname}
                        onChange={(e) => onChange(data.id, 'schoolName', e.target.value)} 
                </label>

                <label>Description:
                    <input type="text" value={educInfo.description}
                        onChange={(e) => setEducInfo({ ...educInfo, description: e.target.value })} />
                </label>

                <label>startDate:
                    <input type="date" value={educInfo.startDate}
                        onChange={(e) => setEducInfo({ ...educInfo, startDate: e.target.value })} />
                </label>
                <label>endDate:
                    <input type="date" value={educInfo.endDate}
                        onChange={(e) => setEducInfo({ ...educInfo, endDate: e.target.value })} />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onAdd}>
                    +Education
                </button>
            </form>
        </div >
    );
}