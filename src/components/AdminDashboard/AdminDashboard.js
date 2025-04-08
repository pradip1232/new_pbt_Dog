import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminProducts from './AdminProducts';
import AdminUpload from './AdminUpload';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="admin-dashboard">
            <AdminSidebar />
            <div className="admin-content">
                <div className="admin-topbar">
                    <div className="admin-details" onClick={toggleDropdown}>
                        Admin Name <span className="dropdown-arrow">▼</span>
                    </div>
                    {dropdownOpen && (
                        <div className="admin-dropdown">
                            <p>Profile</p>
                            <p>Settings</p>
                            <p>Logout</p>
                        </div>
                    )}
                </div>
                <Routes>
                    <Route path="/admin" element={<h2>Welcome to the Admin Dashboard</h2>} />
                    <Route path="/admin/products" element={<AdminUpload />} />
                    <Route path="/admin/buttonlinks" element={<AdminProducts />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard; 