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
      
      <div className="container auth-container">
        <div className="card auth-card">
          <h2 className="auth-title">User Login</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('User login not implemented. Please use Admin login.'); }}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <button className="btn" style={{width: '100%'}} type="submit">Log In</button>
          </form>
          <div style={{textAlign: 'center', marginTop: '1rem'}}>
            <a href="#" style={{color: 'var(--primary)'}}>Create Account</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
