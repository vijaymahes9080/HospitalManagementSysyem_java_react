import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getItems } from '../utils/database';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const admins = getItems('admins');
    const valid = admins.find(a => a.username === username && a.password === password);
    
    if (valid) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      alert('Invalid username or password. (Hint: admin / password123)');
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/"><h1>HospitalManagementSystem</h1></Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/admin" className="active">Admin Login</Link>
        </div>
      </nav>
      
      <div className="container auth-container">
        <div className="card auth-card">
          <h2 className="auth-title">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username" 
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password" 
                required
              />
            </div>
            <button className="btn" style={{width: '100%'}} type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
