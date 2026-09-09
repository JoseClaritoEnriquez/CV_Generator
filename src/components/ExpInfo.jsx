import { useState } from 'react';

export default function ExpInfo({ data, onChange, onDelete }) {
    return (
        <div className="form-section">
            {onDelete && (
                <button type="button" className="delete-btn" onClick={() => onDelete(data.id)}>
                    Remove
                </button>
            )}

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
            </label>
        </div>
    );
}