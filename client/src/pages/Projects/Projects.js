import React, {Component} from 'react'
import Nav, {links} from '../../components/Nav'
import {Col, Container, Row, Image} from '../../components/Grid'
import Info from '../../components/Info'
import Card from '../../components/Card'
import Titles from '../../components/Titles'
import Footer from '../../components/Footer'
import { data } from "./data"
import './Projects.css'

class Projects extends Component {
    state = {}

    componentDidMount() {}

    render() {

        return (

            <div>
                <Nav navLinks={links}/>
                <Container>
                    <Row extra='headDiv'>
                        <Col size='md-12'>
                            <Row>
                                <Col size='md-12'>
                                    <Titles
                                        props={{
                                        title: 'Projects'
                                    }}/>
                                </Col>
                            </Row>
                            <Row extra='content'>
                                <Card projects={data}/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Projects
