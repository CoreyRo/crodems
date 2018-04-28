import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Col, Container, Row, Image} from '../Grid'
import './Footer.css'

const Footer = () => {

    return (
        <footer class="footer footer-dark">
            <Container>
                <Row extra='mx-auto'>
                    <Col size='md-4' extra='footer-div footer-social'>
                        <h3>
                            Social Media
                        </h3>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-facebook-square"></i>
                            <span> Facebook</span></a>
                        </p>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-twitter-square"></i>
                            <span> Twitter</span></a>
                        </p>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-instagram"></i>
                            <span> Instagram</span></a>
                        </p>
                    </Col>
                    <Col size='md-4' extra='footer-div footer-contact'>
                        <h3>
                            Contact Info
                        </h3>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-linkedin"></i>
                            <span> Linkedin</span></a>
                        </p>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-github-square"></i>
                            <span> Github</span></a>
                        </p>
                        <p>
                            <a href='#' target='_blank'><i class="fab fa-stack-overflow"></i>
                            <span> Stack Overflow</span></a>
                        </p>
                        <p>
                            <i class="fas fa-phone-square"></i>
                            <span> 555-555-5555</span>
                        </p>
                        <p>
                            <a href='mailto:coreyrodems@gmail.com'>
                                <i class="fas fa-envelope-square"></i>
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
                                <i class="fas fa-home"></i>
                               {` Home`}</Link>
                        </p>
                        <p>
                            <Link to='/about'>
                                <i class="fas fa-info-circle"></i>
                                {` About`}</Link>
                        </p>
                        <p>
                            <Link to='/projects'>
                                <i class="fas fa-folder-open"></i>
                               {` Projects`}</Link>
                        </p>
                        <p>
                            <Link to='/contact'>
                                <i class="fas fa-envelope"></i>
                                {` Contact`}</Link>
                        </p>
                    </Col>

                </Row>
                <span class="text-muted">Copyright &copy; 2018 Corey Rodems</span>
            </Container>
        </footer>
    )
}

export default Footer