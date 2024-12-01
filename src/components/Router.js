import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn/components/SignIn';
import PageForAdmins from '../pages/PageForAdmins/components/PageForAdmins';
import PageForUsers from '../pages/PageForUsers/components/PageForUsers';
import { useSelector } from 'react-redux';

const Router = ({ clients, setClients }) => {
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
  const currentUser  = useSelector(state => state.userState.currentUser );

  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      
      <Route path="/" element={
        isAuthenticated ? (
          currentUser  && (currentUser.role === 'ROLE_ADMIN' || currentUser.role === 'ROLE_SUPERADMIN') ? (
            <PageForAdmins 
              clients={clients} 
              setClients={setClients} 
            />
          ) : (
            <PageForUsers />
          )
        ) : (
          <Navigate to="/SignIn" />
        )
      } />
    </Routes>
  );
};

export default Router;