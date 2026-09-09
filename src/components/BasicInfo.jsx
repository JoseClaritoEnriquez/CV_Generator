import { useState } from 'react';

export default function BasicInfo({ onSubmitInfo }) {


    const [localInfo, setLocalInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitInfo(localInfo);
    }


    return (
        <div className="form-section">
            <form onSubmit={handleSubmit}>

                <h2> Basic Information </h2>
                <label>Name:
                    <input type="text"
                        value={localInfo.name}
                        onChange={(e) => setLocalInfo({ ...localInfo, name: e.target.value })} />
                </label>

                <label>Email:
                    <input type="email"
                        value={localInfo.email}
                        onChange={(e) => setLocalInfo({ ...localInfo, email: e.target.value })} />
                </label>

                <label>phone:
                    <input type="tel"
                        value={localInfo.phone}
                        onChange={(e) => setLocalInfo({ ...localInfo, phone: e.target.value })}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div >
    );
}