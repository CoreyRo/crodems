import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

class App extends Component {

	state={
		extras: ""
	}

	//listen for scroll to transition navbar classes
    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

	//checks to see if the the navbar is about to hit content
    checkScroll = (e) => {
		console.log(window.scrollY)
		if(window.scrollY >= 50){
			this.setState({extras: "navbar-dark bg-dark"})
		}
		else{
			this.setState({extras: "navbar-dark bg-trans"})
		}
	}
	



    render() {
        return (
            <div className="App" ref='App'>
                <Router>
					<div							
						style={{
							backgroundImage: 'url("../public/imgs/bg2.jpg")',
							backgroundSize: "cover",
							backgroundAttachment: 'fixed',
							position: "relative"
						}}>
						<Nav ref='nav' extras={this.state.extras} />
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/projects' component={Projects}/>
                        <Route exact path='/contact' component={Contact}/>
						<Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
