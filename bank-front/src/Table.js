import React from "react";

const Table = ({ clients, delClient }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => {
          return (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.surname}</td>
              <td>{client.phone}</td>
              <td>
                 <button onClick={() => delClient(client.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;