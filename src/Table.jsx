import React from 'react'

function Table({athletes, editAthlete, deleteAthlete}) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Sport</th>
                    <th>Nationality</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody id="tbody">
            {athletes.map((athlete) => (
                    <tr key={athlete.id}>
                        <td>{athlete.id}</td>
                        <td>{athlete.name}</td>
                        <td>{athlete.sport}</td>
                        <td>{athlete.nationality}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => editAthlete(athlete)}>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteAthlete(athlete.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table