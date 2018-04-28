import React from "react";

export const Row = ({ fluid, children, extra }) =>
    <div className={`row${fluid ? "-fluid" : ""}${extra ? " " + extra : ""}`}>
        {children}
    </div>;