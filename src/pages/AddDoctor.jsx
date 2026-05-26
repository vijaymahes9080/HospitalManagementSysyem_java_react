import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addItem } from '../utils/database';

function AddDoctor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '', lname: '', gender: '', mobile: '', city: '',
    email: '', age: '', address: '', qualification: ''
  });

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem('doctors', { ...formData, date: new Date().toLocaleString() });
    alert('Doctor added successfully!');
    navigate('/doctors');
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/admin-dashboard"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/admin-dashboard">Dashboard</Link>
          <Link to="/doctors">Doctors</Link>
        </div>
      </nav>
      <div className="container">
        <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2>Add New Doctor</h2>
          <form onSubmit={handleSubmit} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            <div className="form-group"><label>First Name</label><input required name="fname" onChange={handleChange}/></div>
            <div className="form-group"><label>Last Name</label><input required name="lname" onChange={handleChange}/></div>
            <div className="form-group"><label>Gender</label>
              <select name="gender" required onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group"><label>Mobile</label><input required name="mobile" onChange={handleChange}/></div>
            <div className="form-group"><label>City</label><input required name="city" onChange={handleChange}/></div>
            <div className="form-group"><label>Email</label><input required type="email" name="email" onChange={handleChange}/></div>
            <div className="form-group"><label>Age</label><input required type="number" name="age" onChange={handleChange}/></div>
            <div className="form-group"><label>Qualification</label><input required name="qualification" onChange={handleChange}/></div>
            <div className="form-group" style={{gridColumn: '1 / -1'}}><label>Address</label><input required name="address" onChange={handleChange}/></div>
            <div style={{gridColumn: '1 / -1', marginTop: '1rem'}}>
              <button type="submit" className="btn">Add Doctor</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddDoctor;
