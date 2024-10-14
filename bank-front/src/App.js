import './App.css';
import ClientAPI from "./api/services";
import Table from "./Table";
import Form from "./Form";
import SignIn from './SignIn';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

const initialClients = ClientAPI.all();

function App() {

  const [clients, setClients] = useState(initialClients);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/SignIn" element={<SignIn setAuth={setIsAuthenticated}/>}/>
          <Route path="/" element={isAuthenticated ? (
            <>
              <Form handleSubmit={addClient} inClient={{ name: "", surname: "", phone: "" }} />
              <Table clients={clients} delClient={delCli} />
            </>
          ) : (
            <Navigate to="/SignIn" />)
          } />
          </Routes>
      </div>
      </Router>
      );
}

      export default App;
