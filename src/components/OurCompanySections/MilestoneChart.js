import React, { useEffect, useState } from 'react';
import '../css/MilestoneChart.css';
import gg2 from '../images/IMG (214).webp';

const milestones = [
    { year: 2006 },
    { year: 2010 },
    { year: 2011 },
    { year: 2014 },
];

const MilestoneChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % milestones.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="milestone-container">
            <div className="milestone-overlay">
                <h2 className="milestone-title">MILESTONES CHART</h2>

                <img src={gg2} alt="Milestone graph" className="milestone-image" />
                <div className="milestone-image-wrapper">
                    <div className="milestone-line-wrapper">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`milestone ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div className="milestone-year">{milestone.year}</div>
                            </div>
                        ))}
                    </div>
                </div>


                <p className="milestone-description">
                    Our Mission is to introduce vital International Healthcare products to the Indian Market, thereby improving the welfare of animals
                </p>
                <hr className='' />
            </div>
        </div>
    );
};

export default MilestoneChart;
