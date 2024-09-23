import './App.css';
import ClientAPI from "./api/services";
import Table from "./Table";
import { useState } from "react";

const initialClients = ClientAPI.all();

function App() {

  const [clients, setClients] = useState(initialClients);

  const delCli = (id) => {
    if (ClientAPI.delete(id)) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  return (
    <div className="App">
      <Table clients={ClientAPI.all()} delClient={delCli} />
    </div>
  );
}

export default App;
