import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// Layout & Pages
import AppLayout from "./layouts/AppLayout"; // Verify your file paths
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage"; // Check exact component names
import PujaGallery from "./pages/PujaGallery";
import PujaCommittee from "./pages/PujaCommittee";
import Contact from "./pages/PujaContact";
import NotFoundPage from "./pages/NotFoundPage";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

// Standard Protected Route Component
const ProtectedAdminRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

export default function App() {
  // Read token from localStorage on initial load to maintain login session across refreshes
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const handleLoginSuccess = (token) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    setIsAdminAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAdminAuthenticated(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        { path: "gallery", element: <PujaGallery /> },
        { path: "committee", element: <PujaCommittee /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    {
      path: "/admin-login",
      element: isAdminAuthenticated ? (
        <Navigate to="/admin-dashboard" replace />
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      ),
    },
    {
      path: "/admin-dashboard",
      element: (
        <ProtectedAdminRoute isAuthenticated={isAdminAuthenticated}>
          <AdminDashboard onLogout={handleLogout} />
        </ProtectedAdminRoute>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}