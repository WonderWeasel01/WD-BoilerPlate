import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PasswordProtect from "./components/passwordProtect";
import Home from "./pages/home";
import Admin from "./pages/admin"; // Correct this import
import AdminHome from "./pages/admin/home";
import "./index.css";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/hjem" />} />
        <Route path="/hjem" element={<Home />} />

        <Route
          path="/admin/*"
          element={
            <PasswordProtect>
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/" element={<Navigate to="/admin/hjem" />} />
                <Route path="/hjem" element={<AdminHome />} />
              </Routes>
            </PasswordProtect>
          }
        />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
