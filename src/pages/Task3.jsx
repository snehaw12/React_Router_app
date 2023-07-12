import React from 'react';
import { useLocation } from 'react-router-dom';

function Task3() {
  const location = useLocation();
  const selectedUser = location.state?.user;

  return (
    <div className="task3-container">
      <h2>User Details</h2>
      {selectedUser && (
        <div className="user-details">
          <div>ID: {selectedUser.id}</div>
          <div>Full Name: {selectedUser.first_name} {selectedUser.last_name}</div>
          <div>Title: {selectedUser.title}</div>
          <img src={selectedUser.avatar} alt="Avatar" />
        </div>
      )}
    </div>
  );
}

export default Task3;