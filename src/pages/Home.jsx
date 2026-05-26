import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin Login</Link>
        </div>
      </nav>
      
      <div className="container" style={{marginTop: '2rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem'}}>Welcome to HMS</h2>
          <p className="text-muted" style={{fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
            Navigate through the application using the quick links below.
          </p>
        </div>

        <div className="dashboard-grid">
          <Link to="/admin" className="dashboard-card">
            <h3>Admin Login</h3>
            <p className="text-muted">Login as administrator</p>
          </Link>

          <Link to="/admin-dashboard" className="dashboard-card">
            <h3>Admin Dashboard</h3>
            <p className="text-muted">Main control panel</p>
          </Link>

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

export default Home;
