import React from 'react'
import "./Skills.css"

const Skills = () =>{

    return(
        <div id='skills' className='container'>

            <h2 className=''>Competent in...
            </h2>

            <div className='row mx-auto text-center'>
                <div className='col-sm-4 mx-auto text-center'>
                    <div className='bgcoverskills' >
                        <p>
                            <span id='html5'><i className="fab fa-html5"></i></span>
                            <span>HTML5</span>
                        </p>
                        <p>
                            <span id='css3'><i className="fab fa-css3-alt"></i></span>
                            <span>CSS3</span>
                        </p>
                        <p>
                            <span id='es6'><i className="fab fa-js"></i></span>
                            <span>ES6</span>
                        </p>
                    </div>
                </div>

                <div className='col-sm-4 mx-auto text-center'>
                    <div className='bgcoverskills'>
                        <p>
                            <span>
                            <img
                                src="../public/imgs/mongod.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="18"
                                width="18"/>
                           {` MongoDB`}{` & `}{`Mongoose`}</span>
                        </p>
                        <p>
                            <span>
                            <img
                                src="../public/imgs/mysql.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="24"
                                width="24"/>
                           {` My`}Sql{` & `}Sequelize</span>
                        </p>
                        <p>
                            <span id='nodejs'><i className="fab fa-node-js"></i></span> 
                            <span>{`Node.js`}{` & Express`}</span>
                        </p>
                    </div>
                </div>
                <div className='col-sm-4 mx-auto text-center'>
                    <div className='bgcoverskills'>
                        <p>
                            <span id='wordpress'>
                            <i className="fab fa-wordpress"></i></span>
                            <span>WordPress</span>
                        </p>
                        <p>
                            <span id='react'><i className="fab fa-react"></i></span><span>
                            React.js</span>
                        </p>
                        <p>
                            <img
                                src="../public/imgs/jquery.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="24"
                                width="24"/>
                           <span>{` jQuery`}</span>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <h5>
            ...and other full stack frameworks and languages.
            </h5>
        </div>
    )
}

export default Skills