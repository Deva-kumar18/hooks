import React, { useReducer, useState } from "react";
import './UseReducer.css'

const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, { id: Date.now(), name: action.payload }];
    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, name: action.payload.name }
          : user
      );
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

const UseReducer = () => {
  const initialItems = [];

  const [user, dispatch] = useReducer(UserReducer, initialItems);

  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (newUser.trim() !== "") {
      dispatch({ type: "ADD_USER", payload: newUser });
      setNewUser("");
    }
  };

  const updateUser = (id, name) => {
    dispatch({ type: "UPDATE_USER", payload: { id, name } });
  };

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <div className="userreducer-container">
      <h1>User List</h1>
      <input
        type="text"
        className="reducer-input"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="New User"
      />
      <button className="reducer-add-btn" onClick={addUser}>Add User</button>
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.name}
              className="reducer-update"
              onChange={(e) => updateUser(item.id, e.target.value)}
            />
            <button className="reducer-delete-btn" onClick={() => deleteUser(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
