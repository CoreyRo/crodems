import React from 'react'

export const Image = ({ props, children }) =>
    <img 
        className={`${props.fluid ? 'img-fluid' : ""}${props.extra ? " " + props.extra : ""}`}
        src={props.src}
        alt={props.alt}
    >
        {children}
    </img>;