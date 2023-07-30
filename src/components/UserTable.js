import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the backend API 
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch data from the backend API
      const response = await fetch("http://localhost:5000/app/v1/getAllUsers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data.data); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
  user.name.firstname.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container mx-auto h-screen " >
      
      {/* //for the search bar */}

      <div className="mb-4 mt-20">
        <input
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
      </div>

      {/* //for the table */}
      <table className="table-auto w-full bg-pink-400">
        <thead>
          <tr>
            <th className="text-white bg-fuchsia-600 px-4 py-2">ID</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">First Name</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Last Name</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Email</th>
            <th className="bg-fuchsia-600 text-white px-4 py-2">Username</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredUsers.users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name.firstname}</td> 
              <td className="border px-4 py-2">{user.name.lastname}</td> 
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UserTable;
