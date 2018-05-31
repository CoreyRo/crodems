//This is a react component that creates bootstrap cards
//Author: Corey Rodems
import React, {Component} from 'react'
import {Row, Container, Col, Image} from '../Grid'
import './Card.css'
//Bootstrap card component
//projects are JSON objects from a mongoDB, or an external file
const Card = ({projects}) => {
    return (
        //Going through each {project} and creating a bootstrap card, theres a ternary here also to avoid broken elements
        //this process will take the title, text body, image and any links and create a card.
        projects ? projects.map(function(project, i){
            return(
                <Col size='md-4' key={`key-${i}`}>
                    <div className="card">
                        {/*<Image/> is a componenet I made earlier, basically a normal <img> with some tweaks for this site*/}
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
                            {/*here is another ternary and map to see how many links to add to the card */}
                            {project.link ? project.link.map(function(link, i){
                                return(
                                    <a href={link.link} className="card-btn" key={`a-${i}`} target="_blank">{link.name}</a>
                                )
                            })
                            //end of ternary, if there aren't and links passed in, return no elements
                            :
                            ""
                            }
                        </div>
                    </div>
                </Col>
            )
        })
        //end of the first ternary, if there aren't any projects, return nothing
        :
        ""
    )
}
export default Card
