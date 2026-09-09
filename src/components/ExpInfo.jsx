import { useState } from 'react';

export default function ExpInfo({ data, onChange }) {
    return (
        <div className="form-section">

            <label>Organization:
                <input type="text"
                    value={data.expName}
                    onChange={(e) => onChange(data.id, 'expName', e.target.value)} />

            </label>

            <label>Title:
                <input type="text"
                    value={data.title}
                    onChange={(e) => onChange(data.id, 'title', e.target.value)} />
            </label>

            <label>Start date:
                <input type="date"
                    value={data.startDate}
                    onChange={(e) => onChange(data.id, 'startDate', e.target.value)} />
            </label>

            <label>endDate:
                <input type="date"
                    value={data.endDate}
                    onChange={(e) => onChange(data.id, 'endDate', e.target.value)} />
            </label>

            <label>description:
                <input type="text"
                    value={data.description}
                    onChange={(e) => onChange(data.id, 'description', e.target.value)} />

                {/* lets turn this into an actual text area later */}
            </label>


        </div >
    );
}