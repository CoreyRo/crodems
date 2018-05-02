import React, {Component} from 'react'
import {Col} from '../../components/Grid'
import {Container} from '../../components/Grid'
import {Row} from '../../components/Grid'
import ButtonGrp from '../../components/ButtonGrp'
import './Home.css'
import { Z_FIXED } from 'zlib';

class Home extends Component {
    state={

    }

    componentDidMount(){

    }

    render(){
        return(
			<div className='animated fadeIn'
				id='landingDiv'
				style={{
					backgroundImage: 'url("../public/imgs/bg2.jpg")',
					backgroundSize: "cover",
					position: "absolute",
					width: "100%"
				}}
			
			>
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
			<Container>
				<Row>
				<Col size='md-12' extra='mx-auto'>
				<h2 id='responsive-h2' style={{
					
					marginBottom: '25px'
				}}>Mobile first, responsive web design.</h2>
					</Col>
					<Col size='md-12' extra='mx-auto'>
						<img className='img-fluid' src='../public/imgs/responsiveclean2.png' alt='landing_page_img' width='900' />
					</Col>
				</Row>
			</Container>
			</div>
        )
    }
}

export default Home