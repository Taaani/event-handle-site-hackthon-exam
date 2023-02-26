import React from 'react';
// You can create this file to add your own custom styles.
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Imagebg from '../../Assets/Images/abImage.jpg';

function Home() {
    return (
        <Container fluid className="home-container">
            <Row className="align-items-center">
                <Col md={3}>
                    <h1 className="home-link"><Link to="/">Home</Link></h1>
                    <h1 className="home-link"><Link to="/about">About</Link></h1>
                </Col>
                <Col md={9}>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={Imagebg} alt="slider-image" fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
