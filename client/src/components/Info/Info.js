import React, {Component} from 'react'
import axios from 'axios'
import {Row, Container, Col, Image} from '../Grid'
import './Info.css'
import Axios from 'axios';

class Info extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios
            .get('/api/projects/3')
            .then((res => this.setState({projects: res.data})))
            .catch((err => console.log("err", err)))
    }

    render() {
        return (
    
            <Row extra='mx-auto'>
                {this.state.projects
                    ? this
                        .state
                        .projects
                        .map(function (project, i) {
                            return (
                                <Col size='md-12' extra='info-div' key={i}>
                                    <a href={project.link[0].link} target='_blank'>
                                    <Image
                                        props={{
                                        fluid: true,
                                        src: project.imgsrc,
                                        alt: `project=${i}`,
                                        extra: 'project-img',
  
                                    }}/>
                                    </a>
                                </Col>
                            )
                        })
                    : ""
}           </Row>

        )
    }
}

export default Info