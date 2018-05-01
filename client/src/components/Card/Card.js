import React, {Component} from 'react'
import {Row, Container, Col, Image} from '../Grid'
import './Card.css'

const Card = ({projects}) => {

    return (
        projects ? projects.map(function(project, i){
            return(
                <Col size='md-4' key={`key-${i}`}>
                    <div className="card">
                        <Image
                            props={{
                            fluid: 1,
                            src: project.imgsrc,
                            alt: 'Card image cap',
                            extra: 'card-img-top'
                        }}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.text}</p>
                            {project.link ? project.link.map(function(link, i){
                                return(
                                    <a href={link.link} className="card-btn" key={`a-${i}`} target="_blank">{link.name}</a>
                                )
                            })
                            :
                            ""
                            }
                        </div>
                    </div>
                </Col>
            )
        })
        :
        ""
    )
}

export default Card