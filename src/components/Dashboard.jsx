import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
