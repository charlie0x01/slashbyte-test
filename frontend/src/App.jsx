import { Home } from "lucide-react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// components
import UsersList from "./components/UsersList";
import NewUser from "./components/NewUser";

function App() {
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <Toaster position="top-right" reverseOrder={false} />
      <NewUser />
      <UsersList />
    </div>
  );
}

export default App;
