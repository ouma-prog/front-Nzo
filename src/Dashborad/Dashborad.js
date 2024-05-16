import React from 'react';
import Header from '../Composants/Header'; 
import Sidebar from '../Composants/Sidebar';
import DashboardContent from '../Composants/DashboardContent'; 
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const user = state && state.user;

  return (
    <div>
      <Header user={user} /> 
      <div className="flex">
        <Sidebar />
        <DashboardContent /> 
      </div>
    </div>
  );
}

export default Dashboard;
