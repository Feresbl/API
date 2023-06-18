import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserList(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            <p className="name">{user.name}</p>
            <p className="username">{user.username}</p>
            <p className="email">{user.email}</p>
            <p className="website">{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
