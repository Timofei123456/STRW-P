import ClientAPI from "../api/services";
import Table from "../pages/Main/components/Table";
import Form from "../pages/Main/components/Form";
import SignIn from '../pages/SignIn/components/SignIn';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../theme/theme';
import { useState } from "react";

const initialClients = ClientAPI.all();

function App() {
  const [clients, setClients] = useState(initialClients);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
  const dispatch = useDispatch();

  const delCli = (id) => {
    if (ClientAPI.delete(id)) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const addClient = (client) => {
    const newClient = ClientAPI.add(client);
    if (newClient) {
      setClients([...clients, newClient]);
    }
  }

  return (
    <ThemeProvider theme={isAuthenticated ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/SignIn" element={<SignIn setAuth={isAuthenticated} />} />
            <Route path="/" element={isAuthenticated ? (
              <>
                <Form handleSubmit={addClient} inClient={{ name: "", surname: "", phone: "" }} />
                <Table clients={clients} delClient={delCli} />
              </>
            ) : (
              <Navigate to="/SignIn" />
            )} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
