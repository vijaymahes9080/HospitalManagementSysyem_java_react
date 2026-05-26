import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems, deleteItem } from '../utils/database';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPatients(getItems('patients'));
  }, []);

  const handleDelete = (id) => {
    if(confirm('Are you sure?')) {
      deleteItem('patients', id);
      setPatients(getItems('patients'));
    }
  };

  const filtered = patients.filter(p => 
    (p.fname?.toLowerCase() || '').includes(search.toLowerCase()) || 
    (p.lname?.toLowerCase() || '').includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/admin-dashboard"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/add-patient">Add Patient</Link>
          <Link to="/patients" className="active">View Patients</Link>
        </div>
      </nav>
      <div className="container">
        <h2>Patient List</h2>
        <div className="form-group" style={{maxWidth: '300px'}}>
          <input 
            type="text" 
            placeholder="Search by name..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Disease</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(pat => (
                <tr key={pat.id}>
                  <td>{pat.id}</td>
                  <td>{pat.fname} {pat.lname}</td>
                  <td>{pat.gender}</td>
                  <td>{pat.mobile}</td>
                  <td>{pat.city}</td>
                  <td>{pat.disease}</td>
                  <td>
                    <button className="btn" style={{padding: '0.25rem 0.5rem', fontSize: '0.8rem', background: '#EF4444'}} onClick={() => handleDelete(pat.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan="7" style={{textAlign: 'center'}}>No patients found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PatientList;
