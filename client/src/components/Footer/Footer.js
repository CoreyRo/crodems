import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Image} from '../Grid'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="footer footer-dark">
            <Container>
                <Row extra='mx-auto'>
                    <Col size='md-4' extra='footer-div footer-social'>
                        <h3>
                            Social Media
                        </h3>
                        <p>
                            <a href='https://twitter.com/RodemsCorey' target='_blank'><i className="fab fa-twitter-square"></i>
                            <span> Twitter</span></a>
                        </p>
                        <p>
                            <a href='https://www.instagram.com/coreyro42/' target='_blank'><i className="fab fa-instagram"></i>
                            <span> Instagram</span></a>
                        </p>
                    </Col>
                    <Col size='md-4' extra='footer-div footer-contact'>
                        <h3>
                            Contact Info
                        </h3>
                        <p>
                            <a href='https://www.linkedin.com/in/coreyrodems/' target='_blank'><i className="fab fa-linkedin"></i>
                            <span> Linkedin</span></a>
                        </p>
                        <p>
                            <a href='https://www.github.com/coreyro' target='_blank'><i className="fab fa-github-square"></i>
                            <span> Github</span></a>
                        </p>
                        <p>
                            <a href='https://stackoverflow.com/users/8233751/cro' target='_blank'><i className="fab fa-stack-overflow"></i>
                            <span> Stack Overflow</span></a>
                        </p>
                          <p>
                            <a href='mailto:coreyrodems@gmail.com'>
                                <i className="fas fa-envelope-square"></i>
                                <span> coreyrodems@gmail.com</span>
                            </a>
                        </p>

                    </Col>
                    <Col size='md-4' extra='footer-div footer-navigation'>
                        <h3>
                            Navigation
                        </h3>
                        <p>
                            <Link to='/'>
                                <i className="fas fa-home"></i>
                               {` Home`}</Link>
                        </p>
                        <p>
                            <Link to='/about'>
                                <i className="fas fa-info-circle"></i>
                                {` About`}</Link>
                        </p>
                        <p>
                            <Link to='/projects'>
                                <i className="fas fa-folder-open"></i>
                               {` Projects`}</Link>
                        </p>
                        <p>
                            <Link to='/contact'>
                                <i className="fas fa-envelope"></i>
                                {` Contact`}</Link>
                        </p>
                    </Col>

                </Row>
                <small className="text-muted">Copyright &copy; 2018 Corey Rodems</small>
            </Container>
        </footer>
    )
}

export default Footer