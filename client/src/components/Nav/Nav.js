import React, {Component} from 'react'
import {NavLink, IndexLink} from 'react-router-dom'
import {Col} from '../Grid'
import {Container} from '../Grid'
import {Row} from '../Grid'

import "./Nav.css"

class Nav extends Component {
    state = {
        navPos: 0,
        navClass: this.props.extras
    }
    componentDidMount() {}

    componentDidUpdate() {
        let pProps = this.props.extras
        let sState = this.state.navClass
        //if props are not the same as state, update the state
        if (pProps !== sState) {
            this.setState({
                navClass: this.props.extras
            }, () => console.log("update props", this.state))
        }
    }

    render() {

        return (
            <nav className={`sticky-top navbar navbar-expand-lg ${this.state.navClass}`}>
                <Container>
                    <a className="navbar-brand" href="/">{`Corey`}
                        <i className="fas fa-code"></i>{`Rodems`}</a>
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
                            <li className='nav-item'>
                                <NavLink className={`nav-link`} activeClassName="active" exact to={`/`}>
                                    <i className={`fas fa-home`}></i>
                                    {`Home`}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className={`nav-link`} activeClassName="active" to={`/about`}>
                                    <i className={`fas fa-info-circle`}></i>
                                    {`About`}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className={`nav-link`} activeClassName="active" to={`/projects`}>
                                    <i className={`fas fa-folder-open`}></i>
                                    {`Projects`}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className={`nav-link`} activeClassName="active" to={`/contact`}>
                                    <i className={`fas fa-envelope`}></i>
                                    {`Contact`}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default Nav