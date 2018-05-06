import React, {Component} from 'react'
import axios from 'axios'
import {Col, Container, Row, Image} from '../../components/Grid'
import Info from '../../components/Info'
import Card from '../../components/Card'
import Titles from '../../components/Titles'
import Footer from '../../components/Footer'
import {data} from "./data"
import './Projects.css'

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios
            .get('/api/projects/null')
            .then((res => this.setState({projects: res.data})))
            .catch((err => console.log("err", err)))
    }

    render() {

        return (

            <div className=''>
                <Container>

                    <Row extra='headDiv animated fadeIn'>
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
                                <Card projects={this.state.projects}/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects
