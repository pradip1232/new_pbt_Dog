import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const UpcomingPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <motion.div 
        className="bg-white shadow-lg rounded-4 p-5 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="display-4 fw-bold text-primary mb-3">Coming Soon</h1>
        <p className="text-muted mb-4">We're working hard to bring you something amazing. Stay tuned!</p>
        <motion.button 
          className="btn btn-primary px-4 py-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Notify Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UpcomingPage;
