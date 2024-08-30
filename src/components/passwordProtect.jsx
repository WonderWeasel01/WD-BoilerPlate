import React, { useState } from "react";

const PasswordProtect = ({ children }) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD; // Replace with

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Incorrect password!");
    }
  };

  // If already authenticated, show the children (protected routes)
  if (isAuthenticated || localStorage.getItem("isAuthenticated") === "true") {
    return children;
  }

  // If not authenticated, show the password form
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handlePasswordSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Enter Password
        </h2>
        <input
          type="password"
          placeholder="Enter password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
