import React, {Component} from 'react'
import {Container, Row, Col, Image} from '../../components/Grid'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Titles from '../../components/Titles'

import './Contact.css'

class Contact extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {

        return (
            <div ref='top'>
                <Nav/>
                <Container>
                    <div className='animated fadeIn'>
                        <Row extra='headDiv text-center'>
                            <Col size='md-12' extra='text-center'>
                                <h1>Contact Corey Rodems</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col size='md-12'>
                                <Form/>
                            </Col>
                        </Row>
                        <Row>
                            <Col size='12' extra='mx-auto text-center'>
                            <h2></h2>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Contact
