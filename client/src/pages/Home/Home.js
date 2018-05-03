import React, {Component} from 'react'
import Nav, {links} from '../../components/Nav'
import {Col, Container, Row} from '../../components/Grid'
import Skills from '../../components/Skills'
import Footer from '../../components/Footer'
import './Home.css'
import {Z_FIXED} from 'zlib';
import {SSL_OP_PKCS1_CHECK_2} from 'constants';

class Home extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div
                className=''
                id='landingDiv'
                >
                <Nav navLinks={links}/>
                <div className=' animated fadeIn'>
                    <Container fluid={1}>
                        <Row>
                            <Col size='md-12' extra='mx-auto'>
                                <div id='landingName'>
                                    <Row>
                                        <Col size='md-12'>
                                            <h1 id='coreyRo'>Corey Rodems</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size='md-5' extra='lineDiv'></Col>
                                        <Col size='md-2'>
                                            <h2 id='fullStack'>Fullstack Developer</h2>
                                        </Col>
                                        <Col size='md-5' extra='lineDiv'></Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row extra='mx-auto text-center'>
                            <Col size='md-12'>
                                <Row></Row>
                            </Col>
                        </Row>
                    </Container>
                    <div className='mid-banner'>

                        <Container>
							
                            <Row extra='bgcover'>
                                <Col size='md-7' extra='intro'>
                                    <h3 className='mx-auto responsive-h2'>
                                        <span className='code'>{`Full `}
                                            <i className="fas fa-code"></i>{` Stack Developer`}</span>
                                        {` with a background in management and quality control.`}
                                    </h3>
                                    <h3 className='mx-auto responsive-h2'>
                                        <span className='grad'>{`Recently `}
                                            <i className="fas fa-graduation-cap"></i>{` completed`}</span>
                                        {` the UC Irvine Fullstack Development Program.`}
                                    </h3>
                                    <h3 className='mx-auto responsive-h2'>
                                        <span className='m-1st'>{`Designing `}
                                            <i className="fas fa-mobile-alt"></i>{` Mobile first`}</span>{`,  responsive web applications.`}
                                    </h3>
                                </Col>
                                <Col size='md-5' extra='mx-auto'>
                                    <img
                                        className='img-fluid'
                                        src='../public/imgs/responsiveclean.png'
                                        alt='landing_page_img'
                                        width='900'/>
                                </Col>

                            </Row>
                            <Row>
                                {/* <Col size='md-12' extra='mx-auto'>
								<Row extra='mx-auto text-center'>
									<Col size='md-12'>
										<Row>
											<h2 className='mx-auto responsive-h2'>
												<i className="fas fa-code fa-lg"></i>
												Junior Full Stack Developer with a background in management and quality control.</h2>
										</Row>
										<Row>
											<h2 className='mx-auto responsive-h2'>
												<i className="fas fa-mobile-alt"></i>
												Mobile first, responsive web design.</h2>
										</Row>
										<Row>
											<h2 className='mx-auto responsive-h2'>
												<i className="fas fa-graduation-cap fa-lg"></i>
												Recently completed the UC Irvine Fullstack Development Program.</h2>
										</Row>
									</Col>
								</Row>
                            </Col> */}

                            </Row>
							
                        </Container>
						
                    </div>
					<Skills/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home