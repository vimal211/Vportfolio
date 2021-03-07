import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./project.css"

import L_RoboFriends from "../../assects/img/projects/Robofriends.webp";
import L_SmartBrain from "../../assects/img/projects/brain.webp";
import Card from "react-bootstrap/Card";

import L_REACT from "../../assects/img/skills/react.svg";
import L_NODE_JS from "../../assects/img/skills/nodejs.svg";
import L_POSTGRESQL from "../../assects/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assects/img/skills/redux.svg";
import L_HTML5 from "../../assects/img/skills/html-5.svg";
import L_CSS3 from "../../assects/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assects/img/skills/bootstrap-4.svg";



const Project = () => {
    return (
        <div id="projects" >

            <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
                    date="14/04/2020"
                    className="text-center"
                    text="RoboFriends"
                    src={L_RoboFriends}
                    alt="Robo Friends"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that allows to
                                search through robots fetched in real-time with users.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Search through Robots</li>
                                <li>Users and Robots being fetched via API call</li>
                                <li>Usage of Redux store</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REDUX}
                                        alt="Redux"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Redux
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://akjha96.github.io/RoboFriends/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/akjha96/RoboFriends"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                <ImageEvent
                    date="21/05/2020"
                    className="text-center"
                    text="Smart Brain Face Detect app"
                    src={L_SmartBrain}
                    alt="Smart Brain Face Detect"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that detects face
                                in a picture.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Register new user</li>
                                <li>Signin exiting user</li>
                                <li>Keep tracks of entries for each user</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_POSTGRESQL}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    PostgreSQL
                                    </span>
                                </li>
                                </ul>
                                <hr />
                                <em>
                                <strong>SignUp/ Signin:</strong>
                                <br />
                                <br />
                                You can <strong>register</strong> as new user or{" "}
                                <strong>log in</strong> using the demo account below.
                                <br />
                                <br />
                                <strong>Demo Account Details:</strong>
                                <br />
                                email: demo@demo.com
                                <br />
                                password: demo
                                </em>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://smart-face-detect-app.herokuapp.com/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/akjha96/Smart_Brain"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                   
                    </div>
                    </div>
                </ImageEvent>

                </Events>
            </Timeline>
            
        </div>
    )
}

export default Project
