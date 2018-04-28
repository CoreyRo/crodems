import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path='/' component={Home}/>
						<Route exact path='/about' component={About}/>
						<Route exact path='/projects' component={Projects}/>
						<Route exact path='/contact' component={Contact}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
