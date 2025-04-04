import React, { useState } from 'react'

function UpdateAthlete({
    id, setId,
    name, setName,
    sport, setSport,
    nationality, setNationality,
    updateAthlete}) {


    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedAthlete = {
            id,
            name,
            sport,
            nationality
        };

        updateAthlete(updatedAthlete);

        setId('');
        setName('');
        setSport('');
        setNationality('');
    }

    return (
        <form id="athlete-update-form" onSubmit={handleSubmit}>
            <h2 className="text-center">Update Athlete</h2>
            <input
                type="hidden"
                className="form-control"
                id="idUpdate"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <div className="mb-3">
                <label htmlFor="nameUpdate" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="nameUpdate"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="sportUpdate" className="form-label">Sport</label>
                <input
                    type="text"
                    className="form-control"
                    id="sportUpdate"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nationalityUpdate" className="form-label">Nationality</label>
                <input
                    type="text"
                    className="form-control"
                    id="nationalityUpdate"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success w-100">Update</button>
        </form>
    )
}

export default UpdateAthlete