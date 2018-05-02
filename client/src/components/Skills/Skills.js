import React from 'react'
import "./Skills.css"

const Skills = () =>{

    return(
        <div id='skills' className='container'>
            <hr/>
            <h2 className=''>Competent in...
            </h2>
            <br/>
            <div className='row'>
                <div className='col-sm-4'>
                    <ul>
                        <li>
                            <span id='html5'><i className="fab fa-html5"></i></span>
                            <span>HTML5</span>
                        </li>
                        <li>
                            <span id='css3'><i className="fab fa-css3-alt"></i></span>
                            <span>CSS3</span>
                        </li>
                        <li>
                            <span id='es6'><i className="fab fa-js"></i></span>
                            <span>ES6</span>
                        </li>
                    </ul>
                </div>

                <div className='col-sm-4'>
                    <ul>
                        <li>
                            <span>
                            <img
                                src="../public/imgs/mongod.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="18"
                                width="18"/>
                           {` MongoDB`}{` & `}{`Mongoose`}</span>
                        </li>
                        <li>
                            <span>
                            <img
                                src="../public/imgs/mysql.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="24"
                                width="24"/>
                           {` My`}Sql{` & `}Sequelize</span>
                        </li>
                        <li>
                            <span id='nodejs'><i className="fab fa-node-js"></i></span> 
                            <span>{`Node.js`}{` & Express`}</span>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-4'>
                    <ul>
                        <li>
                            <span id='wordpress'>
                            <i className="fab fa-wordpress"></i></span>
                            <span>WordPress</span>
                        </li>
                        <li>
                            <span id='react'><i className="fab fa-react"></i></span><span>
                            React.js</span>
                        </li>
                        <li>
                            <img
                                src="../public/imgs/jquery.png"
                                className='img-fluid'
                                alt="Smiley face"
                                height="24"
                                width="24"/>
                           <span>{` jQuery`}</span>
                        </li>
                    </ul>
                </div>
            </div>

            ...and other full stack frameworks and languages.
            <hr/>
        </div>
    )
}

export default Skills