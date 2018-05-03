import React, { Component } from 'react'
import { Container, Row, Col } from '../Grid'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Alert from '../Alert'
import './Form.css'

class Form extends Component {
    state={
        name: "",
        email: "",
        confirmEmail: "",
        textBody: "",
        alert: "",
        message: '',
        type: '',
        show: false,
        clicked: false,
        closed: true,
    }

    componentDidMount(){
        console.log("State", this.state)
    }

    handleInputChange = (e) =>{
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name]: value
        })
    }
    
    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            clicked: !this.state.clicked
        }, ()=> {
            axios.post("/api/contact", {
                name: this.state.name,
                email: this.state.email,
                confirmEmail: this.state.confirmEmail,
                textBody: this.state.textBody 
            })
            .then((res) =>{
                if(Array.isArray(res.data)){
                    return this.errorMap(res.data)
                }
                else{

                    this.setState({
                        type: "success",
                        alert: "Success!",
                        message: "Your message was successfuly sent!",
                        show: true
                    }, () => this.doneReload())
                }
            })
            .catch(err => console.log('err',err))            
        })

    }

    doneReload = () =>{
        setTimeout(wait, 2000)
        function wait(){
            console.log("SUCCESS")
            return window.location.replace('/')
        }
    }

    errorMap = (data) =>{
        data.map((error, i) =>{
            return(
                this.setState({
                    type: "danger",
                    alert: 'Oops!',
                    message: error.msg,
                    show: true,
                    clicked: !this.state.clicked
                })
            )
        })
    }

    disable = (e) => e.preventDefault()

    showSubmit = () =>{
        if(!this.state.clicked){
            return <button type="submit" onClick={this.handleFormSubmit} id='submit-button' className="">Submit</button>
        }
        else{
            return <button type="submit" id='submit-button-disabled' onClick={this.disable} className="">Submit</button>
        }
    }

    toggleClose = (e) =>{
        e.preventDefault()
        this.setState({
            show: !this.state.show
        })
    }

    render(){

        return(
            <div id='form'>
                <Row>
                    <Col size='md-12'>
                        <div className={`alert alert-${this.state.type} alert-dismissible fade ${this.state.show ? 'show' : ""}`} role="alert">
                            <strong>{`${this.state.alert}`}</strong> {` ${this.state.message}`}
                            <button type="button" className="close" onClick={this.toggleClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <div id='contact-form'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={this.handleInputChange} name='name' placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" onChange={this.handleInputChange} name='email' placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmEmail">Confirm Email address</label>
                                    <input type="email" className="form-control" id="confirmEmail" onChange={this.handleInputChange} name='confirmEmail' placeholder="Confirm email address"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textBody">Message</label>
                                    <textarea type="text" className="form-control" id="textBody" onChange={this.handleInputChange} name='textBody' placeholder="Enter your message"/>
                                </div>
                                {this.showSubmit()}
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Form