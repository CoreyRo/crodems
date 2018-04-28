import React from 'react'
import './Titles.css'

const Titles = (props) =>{
    let propss = props.props
    return(
        <div className={propss.divClass ? propss.divClass : "titleDiv"}>
            <h2 className={propss.titleClass ? propss.titleClass : "title"}>
                {propss.title ? propss.title : "ENTER A TITLE"}
            </h2>
        </div>
    )
}

export default Titles