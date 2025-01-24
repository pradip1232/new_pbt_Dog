// StatisticsSection.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/StatisticsSection.css';

// Replace with your image paths
import leadershipImg from "../img/HOMEPAGE/webp/Acepron Injcetion 1.webp"; 
import vetsImg from "../img/HOMEPAGE/webp/Acepron Injcetion 1.webp";
import distributorImg from "../img/HOMEPAGE/webp/Acepron Injcetion 1.webp";
import clinicImg from "../img/HOMEPAGE/webp/Acepron Injcetion 1.webp";

// Statistics data
const statistics = [
    {
        id: 1,
        title: "MARKET LEADERSHIP",
        number: 10,
        icon: "👥", // Replace with your own icon/image if needed
        image: leadershipImg,
    },
    {
        id: 2,
        title: "VETS",
        number: 10,
        icon: "🐕", // Example icon
        image: vetsImg,
    },
    {
        id: 3,
        title: "DISTRIBUTOR",
        number: 20,
        icon: "📦",
        image: distributorImg,
    },
    {
        id: 4,
        title: "CLINICS",
        number: 90,
        icon: "🏥",
        image: clinicImg,
    },
];

const StatisticsSection = () => {
    return (
        <Container fluid className="statistics-section mt-5">
            <Row>
                {statistics.map((stat) => (
                    <Col xs={12} sm={6} md={3} key={stat.id} className="mb-4">
                        <Card className="stat-card">
                            <Card.Img variant="top" src={stat.image} className="stat-image" />
                            <Card.Body className="text-center stat-body">
                                <div className="stat-icon">{stat.icon}</div>
                                <Card.Title className="stat-title">{stat.title}</Card.Title>
                                <h2 className="stat-number">{stat.number}</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StatisticsSection;
