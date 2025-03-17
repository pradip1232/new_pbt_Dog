// StatisticsSection.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/StatisticsSection.css';

// Replace with your image paths
import f1 from '../images/1 (3).webp';
import f2 from '../images/1 (4).webp';
import f3 from '../images/1 (5).webp';
import f4 from '../images/1 (6).webp';

// Statistics data
const statistics = [
    {
        id: 1,
        title: "MARKET LEADERSHIP",
        number: 10,
        icon: "👥", // Replace with your own icon/image if needed
        image: f1,
    },
    {
        id: 2,
        title: "VETS",
        number: 10,
        icon: "🐕", // Example icon
        image: f2,
    },
    {
        id: 3,
        title: "DISTRIBUTOR",
        number: 20,
        icon: "📦",
        image: f3,
    },
    {
        id: 4,
        title: "CLINICS",
        number: 90,
        icon: "🏥",
        image: f4,
    },
];

const StatisticsSection = () => {
    return (
        // <Container  className="statistics-section mt-5">
        //     <Row>
        //         {statistics.map((stat) => (
        //             <Col xs={12} sm={6} md={3} key={stat.id} className="mb-4">
        //                 <Card className="stat-card">
        //                     <Card.Img variant="top" src={stat.image} className="stat-image" />
        //                     <Card.Body className="text-center stat-body">
        //                         <div className="stat-icon">{stat.icon}</div>
        //                         <Card.Title className="stat-title">{stat.title}</Card.Title>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>
        <Container className="statistics-section-home mt-5">
            <Row>
                <Col xs={12} sm={6} md={3} className="state-card-colmn-home">
                    <Card className="stat-card">
                        <Card.Img variant="top" src={f1} className="stat-image" />
                        <Card.Body className="text-center stat-body">
                            <div className="stat-icon">👥</div>
                            <Card.Title className="stat-title">MARKET LEADERSHIP</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3} className="state-card-colmn-home">
                    <Card className="stat-card p-0">
                        <Card.Img variant="top" src={f2} className="stat-image" />
                        <Card.Body className="text-center stat-body">
                            <div className="stat-icon">🐕</div>
                            <Card.Title className="stat-title">VETS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3} className="state-card-colmn-home">
                    <Card className="stat-card">
                        <Card.Img variant="top" src={f3} className="stat-image" />
                        <Card.Body className="text-center stat-body">
                            <div className="stat-icon">📦</div>
                            <Card.Title className="stat-title">DISTRIBUTOR</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={3} className="state-card-colmn-home">
                    <Card className="stat-card">
                        <Card.Img variant="top" src={f4} className="stat-image" />
                        <Card.Body className="text-center stat-body">
                            <div className="stat-icon">🏥</div>
                            <Card.Title className="stat-title">CLINICS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default StatisticsSection;
