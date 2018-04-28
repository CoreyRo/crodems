import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonGrp.css'

const ButtonGrp = ({buttons}) => {
    console.log(buttons)
    return(
        <div className='btn-grp' role='group' aria-label='Basic example'>
            {buttons.map(function(button, i){
                return (
                <Link to={`${button.link ? button.link : "/"}`} key={i}>
                    <button type='button' className={`${button.class ? button.class : "btn btn-secondary"}`}>
                            {button.icon ? <i class={`fas ${button.icon}`}></i> : ""}
                            {button.name ? ` ${button.name}` : "ADD BUTTON NAME"}
                    </button>
                </Link>
                )
            })}
        </div>
    )
}

export default ButtonGrp