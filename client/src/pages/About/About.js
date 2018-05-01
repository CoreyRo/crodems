import React, {Component} from 'react'
import Nav, {links} from '../../components/Nav'
import {Col, Container, Row, Image} from '../../components/Grid'
import Info from '../../components/Info'
import Titles from '../../components/Titles'
import Footer from '../../components/Footer'

import './About.css'

class About extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <div id='about'>
                <Nav navLinks={links}/>
                <Container>
                    <Row extra='headDiv'>
                        <Col size='md-9'>
                            <Row>
                                <Col size='md-12'>
                                    <Titles
                                        props={{
                                        title: 'About me'
                                    }}/>
                                </Col>
                            </Row>
                            <Row extra='content'>
                                <Col size='md-4'>
                                    <Image
                                        props={{
                                        fluid: 1,
                                        src: '../public/imgs/me.jpg',
                                        alt: 'corey_rodems_picture',
                                        extra: ''
                                    }}/>
                                </Col>
                                <Col size='md-8' extra='text-left'>
                                    <p>I’ve always been fascinated by how things work and technology in general. I
                                        loved to take things apart to see if I could put them back together again.</p>
                                    <p>I remember the first computer my parents had. It was an Apple with a clunky
                                        CRT monitor and noisy hardware. While the stock games were fun, I really wanted
                                        to know how it worked. I discovered the settings option, and everything changed.
                                        I changed EVERYTHING you could customize. New backgrounds, mouse pointers,
                                        system sounds, and so on. Of course, my parents were annoyed that whenever they
                                        turned on the computer everything was different, but I was already hooked.</p>
                                    <p>I loved computer games and online communities. I made my first site in middle
                                        school using some GeoCities template. I played around with html and QBasic even
                                        though most of it was over my head back then, but I liked the challenge.
                                        Technology is always interesting and always advancing and the challenge to keep
                                        up with it is what drives my passion for tech.</p>
                                </Col>
                            </Row>
                            <Row extra='hobbiesDiv'>
                                <Col size='4'>
                                    <div className='about-list'>
                                        <p>
                                            <i className="fas fa-gamepad"></i>
                                            <span>Gamer</span>
                                        </p>
                                        <p>
                                            <i className="fas fa-video"></i>
                                            <span>Video Editor</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col size='4'>
                                    <div className='about-list'>
                                        <p>
                                            <i className="fas fa-desktop"></i>
                                            <span>Tech Enthusiast</span>
                                        </p>
                                        <p>
                                            <i className="fas fa-code"></i>
                                            <span>Web Developer</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col size='4'>
                                    <div className='about-list'>
                                        <p><img
                                            src="../public/imgs/bbqic.png"
                                            className='img-fluid'
                                            alt=""
                                            height="24"
                                            width="24"/>
                                            <span>{` BBQ Master`}</span>
                                        </p>
                                        <p>
                                            <i className="fas fa-football-ball"></i>
                                            <span>KC Chiefs Fan</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col size='md-3' extra='infoPanel'>
                            <Row>
                                <Col size='md-12'>
                                    <Titles
                                        props={{
                                        title: "Recent Projects"
                                    }}/>
                                </Col>
                            </Row>
                                <Info />
                            <Row>
                                <Col size='md-12'>
                                    Hello World
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default About
