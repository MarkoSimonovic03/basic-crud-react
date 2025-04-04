import React, { useState } from 'react'

function CreateAthlete({ createAthlete }) {
    const [name, setName] = useState('');
    const [sport, setSport] = useState('');
    const [nationality, setNationality] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const athlete = {
            name,
            sport,
            nationality
        }

        createAthlete(athlete);
        
        setName('');
        setSport('');
        setNationality('');
    }

    return (
        <form id="athlete-add-form" onSubmit={handleSubmit}>
            <h2 className="text-center">Add</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="sport" className="form-label">Sport</label>
                <input
                    type="text"
                    className="form-control"
                    id="sport"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nationality" className="form-label">Nationality</label>
                <input
                    type="text"
                    className="form-control"
                    id="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Add</button>
        </form>
    )
}

export default CreateAthlete