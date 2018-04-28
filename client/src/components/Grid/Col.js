import React from 'react'

export const Col = ({ size, children, extra }) =>
    <div className={`col-${size}${extra ? " " + extra : ""}`}>
        {children}
    </div>;