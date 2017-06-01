import React, { Component } from 'react';
import resume from '../img/modalresume.pdf';
import './resume.css';

class Resume extends Component{
	constructor(props){
		super(props);

		this.state = {
			isMobile : false
		}
		this._onBrowserSize = this._onBrowserSize.bind(this);
	}

	_onBrowserSize(){
		let size = window.innerWidth
		if(size <= 768){
			this.setState({
				isMobile: true
			})
		} else{
			this.setState({
				isMobile: false
			})
		}
	}

	componentDidMount(){
		this._onBrowserSize();
		this.forceUpdate();
	}

	render(){
		return(
			<section>
				{this.state.isMobile ?	
				<div className="mobileResume row">
					<h1 className="col-sm-12 col-xs-12">Daniel Doherty</h1>
					<h4 className="col-sm-12 col-xs-12">Full-Stack Developer</h4>
					<h4 className="col-sm-12 col-xs-12">518-221-2857 danielpdoherty@gmail.com</h4>
					<br/>
					<h3 className="col-sm-12 col-xs-12">About</h3>
					<h5 className="col-sm-12 col-xs-12">
						I am a full-stack web developer, I navigate seamlessly between
						creativity, logic, and organization. I have worked in distribution,
						customer service, bicycle sales and repair. I am hard-working and a
						quick-learner, I have an analytical mind and welcome the opportunity to
						think pragmatically in order to solve any problem given to me. I hope
						we can work together someday soon!
					</h5>
					<br/>
					<h3 className="col-sm-12 col-xs-12">Skills</h3>
					<h5 className="col-sm-12 col-xs-12">
						<strong>Front End:</strong> ​HTML5 - CSS - Javascript - jQuery - ReactJs - React
								Native - Redux - AngularJs - AJAX
						<br/>
						<strong>Backend:</strong> ​NodeJs - ExpressJS - NoSQL - RESTful API - Auth
						<br/>
						<strong>Other:​</strong> Git - Firebase - Java - Python
					</h5>
					<br/>
					<h3 className="col-sm-12 col-xs-12">Education</h3>
					<h5 className="col-sm-12 col-xs-12">
						<strong>General Assembly</strong> <em>​Web Development Immersive</em>
						<br/>
							February 2017 - May 2017 Austin, TX
						<br/>
						<strong>SUNY Albany</strong> <em>​Philosophy</em>
						<br/>
							August 2004 - June 2007 Albany, NY
					</h5>
					<br/>
					<h3 className="col-sm-12 col-xs-12">Experience</h3>
					<h5 className="col-sm-12 col-xs-12">
						<strong>East Side King</strong> <em>​Cook</em>
						<br/>
							February 2016 - February 2017 Austin, TX
						<br/>
							At this high-volume, fast-paced, and well-regarded eatery, I was forced
							to learn quickly and under pressure. I learned the value of working
							closely with a team and at times took on a leadership role.
						<br/>
						<strong>Natural Choice</strong> <em>​Driver</em>
						<br/>
							February 2015 - December 2015 Oakland, CA
						<br/>
							This growing distribution company has it’s driver’s not only deliver the
							product, but also do inventory, merchandising, and sales.
						<br/>
						<strong>Bikes 4 Life</strong> <em>​Bicycle Mechanic</em>
						<br/>
							February 2011 - April 2015 Oakland, CA
						<br/>
							I helped to develop this popular non-profit. I worked tirelessly, not only
							as a bicycle mechanic, but as a community outreach and volunteer
							coordinator.
						<br/>
					</h5>
					<br/>
				</div>

				:

				<section className="resume row">
					<iframe src={resume}></iframe>
				</section>
			}
			</section>
			);
	}
}

export default Resume;