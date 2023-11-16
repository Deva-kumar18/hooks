import React, { useState, useEffect } from "react";
import axios from "axios";

function UseState() {
const [users, setUsers] = useState([]);
const [id, setId] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
    
  const createUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", { username, email })
     .then((response) => {
  setUsers([...users, response.data]);
    setUsername("");
        setEmail("");
      })
      .catch((error) => console.error("Error creating user:", error));
  };

  const updateUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {username,email,})
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === id ? response.data : user
        );
        setUsers(updatedUsers);
        setId("");
        setUsername("");
        setEmail("");
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const editUser = (id, username, email) => {
    setId(id);
    setUsername(username);
    setEmail(email);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setId("");
    setUsername("");
    setEmail("");
    setIsEditing(false);
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="table">
      <div className="inputs">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEditing ? (
          <div>
            <button className="update-user" onClick={updateUser}>Update User</button>
            <button className="del-user" onClick={cancelEdit}>Cancel</button>
          </div>
        ) : (
          <button  className="add-btn" onClick={createUser}>Add</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="inputs-2" onClick={() => deleteUser(user.id)}>Delete</button>
                <button className="inputs-2"
                  onClick={() => editUser(user.id, user.username, user.email)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default UseState;
