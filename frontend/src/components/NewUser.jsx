import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from "axios";

const NewUser = ({ addUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:3000/api/user/new', {
      name: user.name,
      email: user.email,
      role: user.role
    });

    toast.success(response.data?.message);

    window.location.reload();
    // Clear the input
    setUserName('');
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 w-full mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Add New User</h2>
      <div className="mb-4">
        <label htmlFor="userName" className="block text-gray-600 font-medium">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}
          className="w-full p-2 border rounded-md"
          placeholder="Enter username"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          prompt="please provide a valid email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-600 font-medium">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={user.role}
          onChange={(e) => setUser({...user, role: e.target.value})}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Role"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Add User
      </button>
    </form>
  );
};

export default NewUser;
