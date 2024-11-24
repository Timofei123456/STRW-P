import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn/components/SignIn';
import PageForAdmins from '../pages/PageForAdmins/components/PageForAdmins';

const Router = ({ isAuthenticated, clients, setClients }) => {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/" element={isAuthenticated ? (
        <PageForAdmins 
          clients={clients} 
          setClients={setClients} 
        />
      ) : (
        <Navigate to="/SignIn" />
      )} />
    </Routes>
  );
};

export default Router;