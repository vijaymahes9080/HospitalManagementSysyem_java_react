import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAdminLoggedIn')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin');
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/admin-dashboard"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/admin-dashboard" className="active">Dashboard</Link>
          <a href="#" onClick={handleLogout}>Logout</a>
        </div>
      </nav>
      
      <div className="container">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-grid">
          
          <Link to="/add-doctor" className="dashboard-card">
            <h3>Add Doctor</h3>
            <p className="text-muted">Register a new doctor</p>
          </Link>

          <Link to="/doctors" className="dashboard-card">
            <h3>View Doctors</h3>
            <p className="text-muted">List all doctors</p>
          </Link>

          <Link to="/add-patient" className="dashboard-card">
            <h3>Add Patient</h3>
            <p className="text-muted">Register a new patient</p>
          </Link>

          <Link to="/patients" className="dashboard-card">
            <h3>View Patients</h3>
            <p className="text-muted">List all patients</p>
          </Link>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
