import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./about.css";
import Profile from '../../assects/img/profile/Vimal.jpeg';
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div className="about" >
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center ">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                        <Row className=" align-items-start p-4 my-details rounded">
                            Hi there! I am <strong>&nbsp;Vimal M</strong>
                            <br />A passionate programmer , born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Node.js, and PostgreSQL as my tech stack.
                            <br />
                            In 2022, I successfully completed my Engineering with specialization in 'Comupter Science'.
                            <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            <br /> <br />
                            <Col className="d-flex justify-content-center flex-wrap">
                            <div>
                                <a href="#contact">
                                <Button className="m-2" variant="outline-primary">
                                    Let's talk
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/uc?export=download&id=1R7q45RA7eXW2yKcB4RSc5kTQSzi7QZW3" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-success">
                                    My Resume
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/vimal211" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-dark">
                                    GitHub
                                </Button>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/vimal-m-063334173/" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-info">
                                    LinkedIn
                                </Button>
                                </a>
                            </div>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default About
