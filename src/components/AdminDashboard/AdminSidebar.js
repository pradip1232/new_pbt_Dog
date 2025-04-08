import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <h2>Admin Menu</h2>
            <ul>
                <li><Link to="/admin">Dashboard</Link></li>
                <li><Link to="/admin/products">Upload New Product</Link></li>
                <li><Link to="/admin/buttonlinks">Manage Button Links</Link></li>
            </ul>
        </div>
    );
};

export default AdminSidebar; 