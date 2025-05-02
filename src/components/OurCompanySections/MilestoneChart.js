import React, { useEffect, useState, useRef } from 'react';
import '../css/MilestoneChart.css';

const milestones = [
    { year: 2002, positionPercent: 0.1 },  // 10% along the path
    { year: 2010, positionPercent: 0.3 },  // 30% along the path
    { year: 2011, positionPercent: 0.5 },  // 50% along the path
    { year: 2014, positionPercent: 0.7 },  // 70% along the path
    { year: 2016, positionPercent: 0.7 },  // 70% along the path
    { year: 2018, positionPercent: 0.7 },  // 70% along the path
    { year: 2020, positionPercent: 0.7 },  // 70% along the path
    { year: 2025, positionPercent: 0.7 },  // 70% along the path
];

const MilestoneChart = () => {
    const [positions, setPositions] = useState([]);
    const pathRef = useRef(null); // Ref to the SVG path

    useEffect(() => {
        const path = pathRef.current;
        if (path) {
            const pathLength = path.getTotalLength(); // Get the total length of the path
            const updatedPositions = milestones.map(milestone => {
                const point = path.getPointAtLength(milestone.positionPercent * pathLength);
                return { year: milestone.year, x: point.x, y: point.y };
            });
            setPositions(updatedPositions); // Update positions of the milestones along the path
        }
    }, []);

    return (
        <div className="milestone-container">
            {/* SVG Curved Line */}
            <svg viewBox="0 0 1000 300">
                <path
                    ref={pathRef}
                    d="M 0 150 Q 250 0, 500 150 T 1000 150"
                    className="milestone-line"
                />
            </svg>

            {/* Milestones (Circles with years) positioned along the curve */}
            {positions.map((milestone, index) => (
                <div
                    key={index}
                    className="milestone"
                    style={{
                        top: `${milestone.y - 40}px`,
                        left: `${milestone.x - 40}px`,
                    }}
                >
                    {/* Display the year inside the circle */}
                    <div className="milestone-year">{milestone.year}</div>
                </div>
            ))}
        </div>
    );
};

export default MilestoneChart;
