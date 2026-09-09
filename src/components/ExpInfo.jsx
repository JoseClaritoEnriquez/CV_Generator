import { useState } from 'react';

export default function ExpInfo() {
    const [expInfo, setExpInfo] = useState({
        expName: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted data:', expInfo);
    }


    return (
        <div className="form-section">
            <h2> Basic Information </h2>
            <form onSubmit={handleSubmit}>
                <label>Organization:
                    <input type="text" value={expInfo.expName}
                        onChange={(e) => setExpInfo({ ...expInfo, expName: e.target.value })} />
                </label>

                <label>Title:
                    <input type="text" value={expInfo.title}
                        onChange={(e) => setExpInfo({ ...expInfo, title: e.target.value })} />
                </label>
                <label>start date:
                    <input type="date" value={expInfo.startDate}
                        onChange={(e) => setExpInfo({ ...expInfo, startDate: e.target.value })} />
                </label>
                <label>endDate:
                    <input type="date" value={expInfo.endDate}
                        onChange={(e) => setExpInfo({ ...expInfo, endDate: e.target.value })} />
                </label>
                <label>description:
                    <input type="text" value={expInfo.description}
                        onChange={(e) => setExpInfo({ ...expInfo, description: e.target.value })} />
                    {/* lets turn this into an actual text area later */}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div >
    );
}