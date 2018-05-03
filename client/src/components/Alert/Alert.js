import React from 'react'
import './Alert.css'

const Alert = (props) => {
    let prop = props.props

    return (
        <div
            className={`alert alert-${prop.type} alert-dismissible fade ${prop.show
            ? 'show'
            : ""}`}
            role="alert">
            <strong>{`${prop.alert}`}</strong>
            {` ${prop.message}`}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert