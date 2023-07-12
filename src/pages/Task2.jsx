import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import './Task2.css';

function Task2({circles}) {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://random-data-api.com/api/v2/users?size=${circles.length}`);
        if (circles.length === 1){
          response.data = [response.data]
        }
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleCardClick = (user) => {
    navigate('/task3', { state: { user } });
  };

  return (
    <div className="task2-container">
      {userData.map((user) => (
        <div key={user.id} className="card" onClick={() => handleCardClick(user)}>
          <div>ID: {user.id}</div>
          <div>Full Name: {user.first_name} {user.last_name}</div>
          <div>Title: {user.title}</div>
          <img src={user.avatar} alt="Avatar" className="avatar" />
        </div>
      ))}
    </div>
  );
}

export default Task2;
