import { useState } from 'react';

export default function BasicInfo() {
    const [basicInfo, setBasicInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted data:', basicInfo);
    }



    return (
        <div className="form-section">
            <h2> Basic Information </h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" value={basicInfo.name}
                        onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })} />
                </label>

                <label>Email:
                    <input type="email" value={basicInfo.email}
                        onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })} />
                </label>
                <label>phone:
                    <input type="phone" value={basicInfo.phone}
                        onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })} />
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div >
    );
}