import { useEffect, useState } from 'react'
import CreateAthlete from './CreateAthlete';
import UpdateAthlete from './UpdateAthlete';
import Table from './Table'

function App() {
  const [athletes, setAthletes] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [nationality, setNationality] = useState('');


  useEffect(() => {
    getAthletes();
  }, []);

  const getAthletes = () => {
    fetch(`http://localhost:3000/athletes/`)
      .then(res => res.json())
      .then(data => setAthletes(data))
      .catch(error => console.error('Error getting athletes:', error));
  };

  const getAthleteById = (id) => {
    fetch(`http://localhost:3000/athletes/${id}`)
      .then(res => res.json())
      .then(data => setAthlete(data))
      .catch(error => console.error('Error getting athlete:', error));
  };

  const createAthlete = (athlete) => {
    fetch(`http://localhost:3000/athletes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(athlete)
    })
      .then(() => {
        getAthletes();
      })
      .catch(error => console.error('Error creating athlete:', error));
  };

  const updateAthlete = (athlete) => {
    fetch(`http://localhost:3000/athletes/${athlete.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(athlete)
    })
      .then(() => {
        getAthletes();
      })
      .catch(error => console.error('Error updating athlete:', error));
  };

  const deleteAthlete = (id) => {
    fetch(`http://localhost:3000/athletes/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        getAthletes();
      })
      .catch(error => console.error('Error deleting athlete:', error));
  };

  const editAthlete = (athlete) => {
    setId(athlete.id);
    setName(athlete.name);
    setSport(athlete.sport);
    setNationality(athlete.nationality)
  };

  return (
    <>
      <section>
        <div className="container p-5">
          <div className="row pt-5">
            <div className="col md-5">
              <CreateAthlete createAthlete={createAthlete} />
            </div>
            <div className="col-md-5 offset-md-2 pt-sm-5 pt-md-0">
              <UpdateAthlete 
              id={id} setId={setId} 
              name={name} setName={setName} 
              sport={sport} setSport={setSport} 
              nationality={nationality} setNationality={setNationality}  
              updateAthlete={updateAthlete} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Table athletes={athletes} editAthlete={editAthlete} deleteAthlete={deleteAthlete} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
