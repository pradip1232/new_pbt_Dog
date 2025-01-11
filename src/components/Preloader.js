import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./css/preloader.css"; // Optional, for custom styling

const Preloader = () => {
    return (
        <div className="preloader">
            <TailSpin
                height="80"
                width="80"
                color="#233B77"
                ariaLabel="loading"
            />
        </div>
    );
};

export default Preloader;
