import React, { useState, useEffect } from "react";
import axios from "axios";

const PasswordProtect = ({ children }) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [correctPassword, setCorrectPassword] = useState("");
  const [loading, setLoading] = useState(true); // New state to handle loading

  useEffect(() => {
    // Fetch the password from the backend API
    axios
      .get("http://localhost:3001/api/data/get-password") // Correct endpoint
      .then((response) => {
        setCorrectPassword(response.data.password);
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching password:", error);
        setLoading(false); // Ensure loading state is updated even if there's an error
      });
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      alert("Password is loading. Please wait.");
      return;
    }
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

  // If not authenticated and password is loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
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
