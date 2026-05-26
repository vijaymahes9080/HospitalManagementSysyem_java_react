import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import DoctorList from './pages/DoctorList';
import AddDoctor from './pages/AddDoctor';
import PatientList from './pages/PatientList';
import AddPatient from './pages/AddPatient';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
