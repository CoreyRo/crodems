import React, {Component} from 'react'
import {Col} from '../../components/Grid'
import {Container} from '../../components/Grid'
import {Row} from '../../components/Grid'
import ButtonGrp from '../../components/ButtonGrp'
import './Home.css'

class Home extends Component {
    state={

    }

    componentDidMount(){

    }

    render(){
        return(
			<div id='landingDiv'>
			<Container fluid={1}>
				<Row>
					<Col size='md-12' extra='mx-auto'>
						<div id='landingName'>
							<Row>
								<Col size='md-12'>
									<h1 id='coreyRo'>Corey Rodems</h1>
								</Col>
							</Row>
							<Row>
								<Col size='md-5' extra='lineDiv'></Col>
								<Col size='md-2'>
									<h2 id='fullStack'>Fullstack Developer</h2>
								</Col>
								<Col size='md-5' extra='lineDiv'></Col>
							</Row>
						</div>	
					</Col>
				</Row>
				<Row>
					<Col size='md-12' extra='mx-auto text-center landingNavDiv'>
					<ButtonGrp 
						buttons={
							[
								{
									name: 'About',
									icon: 'fa-info-circle',
									class: 'landingNavBtn',
									link: '/about'
								},
								{
									name: 'Projects',
									icon: 'fa-folder-open',
									class: 'landingNavBtn',
									link: '/projects'
								},
								{
									name: 'Contact',
									icon: 'fa-envelope',
									class: 'landingNavBtn',
									link: '/contact'
								},
							]
						}
					/>
					</Col>
				</Row>
			</Container>
			<Row>
				<Col size='md-12' extra='mx-auto'>
					<img className='img-fluid' src='../public/imgs/responsiveclean.png' alt='landing_page_img' />
				</Col>
			</Row>
			</div>
        )
    }
}

export default Home