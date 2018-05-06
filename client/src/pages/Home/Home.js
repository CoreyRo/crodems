import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Col, Container, Row} from '../../components/Grid'
import Skills from '../../components/Skills'
import Footer from '../../components/Footer'
import './Home.css'

import {Z_FIXED} from 'zlib';
import {SSL_OP_PKCS1_CHECK_2} from 'constants';

class Home extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className='' id='landingDiv'>
                <div className=' animated fadeIn'>
                    <div
                        style={{
                        backgroundImage: 'url("../public/imgs/bg2.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        position: "relative"
                    }}>
                        <Container fluid={0}>
                            <Row extra='home-div'>
                                <Col size='md-12' extra='mx-auto'>
                                    <div id='landingName'>
                                        <Row>
                                            <Col size='md-12'>
                                                <h1 ref='myName' id='coreyRo'>Corey Rodems</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size='md-1'></Col>
                                            <Col size='md-3' extra='lineDiv'></Col>
                                            <Col size='md-4'>
                                                <h2 id='fullStack'>Fullstack Developer</h2>
                                            </Col>
                                            <Col size='md-3' extra='lineDiv'></Col>
                                            <Col size='md-1'></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div
                        style={{
                        background: 'rgb(10, 10, 10)',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        position: "relative"
                    }}>
                        <Container>
                            <Row extra='home-div'>
                                <Col size='md-12'>
                                    <Row>
                                        <Col size='md-4' extra='intro'>
                                            <div className=' bgcover'>
                                                <h3 className='mx-auto responsive-h2'>
                                                    <span className='m-1st'>{`Designing `}
                                                        <i className="fas fa-mobile-alt"></i>{` Mobile first`}</span>{`,  responsive web applications.`}
                                                </h3>
                                            </div>
                                        </Col>
                                        <Col size='md-4' extra='intro'>
                                            <div className=' bgcover'>
                                                <h3 className='mx-auto responsive-h2'>
                                                    <span className='code'>{`Full `}
                                                        <i className="fas fa-code"></i>{` Stack Developer`}</span>
                                                    {` with a background in management and quality control.`}

                                                </h3>
                                            </div>
                                        </Col>
                                        <Col size='md-4' extra='intro'>
                                            <div className=' bgcover'>
                                                <h3 className='mx-auto responsive-h2'>
                                                    <span className='grad'>{`Recently `}
                                                        <i className="fas fa-graduation-cap"></i>{` completed`}</span>
                                                    {` the UC Irvine Fullstack Development Program.`}

                                                </h3>
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col size='md-4' extra='intro'>
                                            <div style={{backgroundImage: 'url("http://theresacay.com/images/github-icon.png")', backgroundSize:'cover', backgroundRepeat  : 'no-repeat', backgroundPosition: 'center'}}  >
                                                <a href='https://www.github.com/coreyro' target='_blank'>
                                                    <div className='bgcover intro-link' >
                                                        <h3 className='mx-auto responsive-h2'>
                                                            <span className='ghub'>
                                                                <i className="fab fa-github-square"></i>{` Visit my GitHub`}</span>{``}
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col size='md-4' extra='intro'>
                                            <div style={{backgroundImage: `url("http://www.contecreatives.com/wp-content/uploads/2016/02/linkedin.png")`, backgroundSize:'contain', backgroundRepeat  : 'no-repeat', backgroundPosition: 'center'}}  >
                                                <a href='https://www.linkedin.com/in/coreyrodems/' target='_blank'>
                                                    <div className='bgcover intro-link' >
                                                        <h3 className='mx-auto responsive-h2'>
                                                            <span className='lkin'>
                                                                <i className="fab fa-linkedin"></i>{`Find me on Linkedin`}</span>
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col size='md-4' extra='intro'>
                                            <div style={{backgroundImage: 'url("http://2016.igem.org/wiki/images/4/4d/T--UCLA--File_email.png")', backgroundSize:'contain', backgroundRepeat  : 'no-repeat', backgroundPosition: 'center'}}  >
                                                <Link to='/contact'>
                                                    <div className='bgcover intro-link'>
                                                        <h3 className='mx-auto responsive-h2'>
                                                            <span className='emailme'>
                                                            <i className="fas fa-envelope"></i>{` contact me`}</span>
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div
                        style={{
                        backgroundImage: 'url("../public/imgs/bg2.jpg")',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        position: "relative"
                    }}>
                        <Container>
                            <Row extra='home-div'>
                                <Col size='md-8' extra='mx-auto'>
                                    <img
                                        className='img-fluid'
                                        src='../public/imgs/responsiveclean.png'
                                        alt='landing_page_img'
                                        width=''/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div
                    style={{
                        background: 'rgb(10, 10, 10)',
                        backgroundSize: "cover",
                        backgroundAttachment: 'fixed',
                        position: "relative"
                    }}>
                        <Container>
                            <Row extra='home-div'>
                                <Skills/>
                            </Row>
                        </Container>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home