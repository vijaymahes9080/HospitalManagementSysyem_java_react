import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems, deleteItem } from '../utils/database';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDoctors(getItems('doctors'));
  }, []);

  const handleDelete = (id) => {
    if(confirm('Are you sure?')) {
      deleteItem('doctors', id);
      setDoctors(getItems('doctors'));
    }
  };

  const filtered = doctors.filter(d => 
    (d.fname?.toLowerCase() || '').includes(search.toLowerCase()) || 
    (d.lname?.toLowerCase() || '').includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/admin-dashboard"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/add-doctor">Add Doctor</Link>
          <Link to="/doctors" className="active">View Doctors</Link>
        </div>
      </nav>
      <div className="container">
        <h2>Doctor List</h2>
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
                <th>Specialization</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(doc => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.fname} {doc.lname}</td>
                  <td>{doc.gender}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.city}</td>
                  <td>{doc.qualification}</td>
                  <td>
                    <button className="btn" style={{padding: '0.25rem 0.5rem', fontSize: '0.8rem', background: '#EF4444'}} onClick={() => handleDelete(doc.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan="7" style={{textAlign: 'center'}}>No doctors found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DoctorList;
