import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Col} from '../Grid'
import {Container} from '../Grid'
import {Row} from '../Grid'
import "./Nav.css"

class Nav extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
            <Container>
                <a className="navbar-brand" href="/">CoreyRodems.com</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navigation">

                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {this.props.navLinks.map(function (link, i) {
                                return (
                                    <li className='nav-item' key={i}>
                                        <Link className='nav-link' to={link.link}>
                                            {link.icon ? <i className={`fas ${link.icon}`}></i> : ""}
                                            {` ${link.name}`}
                                        </Link>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                </Container>
            </nav>
        )
    }
}

export default Nav