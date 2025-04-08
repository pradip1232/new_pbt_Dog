import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FileNotFound = () => {
    return (
        <Container className="text-center my-5">
            <Row>
                <Col>
                    <h1>404 - File Not Found</h1>
                    <p>Sorry, the file you are looking for does not exist.</p>
                    <p>Please check the URL or return to the homepage.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default FileNotFound; 