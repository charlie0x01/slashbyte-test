import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Trash, Trash2 } from "lucide-react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUser = (id) => {
    console.log("delete");
    axios
      .delete(`http://localhost:3000/api/user/delete/${id}`)
      .then((response) => {
        toast(response.data?.message)
      })
      .catch((error) => {
        console.log(error)
      });

    // refreash page to mimic auto refetch
      window.location.reload();
  };

  useEffect(() => {
    // API call with dummy data
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        toast.error("something went wrong");
      });
  }, []);
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-xl font-semibold">User List</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <button onClick={() => deleteUser(user.id)}>
                    <Trash2 size={18} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
