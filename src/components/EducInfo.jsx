import { useState } from 'react';

export default function EducInfo({ data, onChange }) {



    return (
        <div className="form-section">

            <label>Instituion Name:
                <input type="text" value={data.schoolName}
                    onChange={(e) => onChange(data.id, 'schoolName', e.target.value)} />
            </label>

            <label>Description:
                <input type="text"
                    value={data.description}
                    onChange={(e) => onChange(data.id, 'description', e.target.value)} />
            </label>

            <label>startDate:
                <input type="date"
                    value={data.startDate}
                    onChange={(e) => onChange(data.id, 'startDate', e.target.value)} />
            </label>
            <label>endDate:
                <input type="date" value={data.endDate}
                    onChange={(e) => onChange(data.id, 'endDate', e.target.value)} />
            </label>
        </div >
    );
}