import React, { Component } from 'react';
import Canvas from './Canvas';
import './about.css';

class About extends Component{
	render(){
		return(
			<section className="about row">
				<div className="col-md-6 col-sm-12 col-xs-12">
					<h2>Greetings!</h2>
						<p>
							I'm a web developer with full-stack experience. 
							I love to build creative and stylish web applications.
						<br/>
						<br/>
							I began my journey in early 2017 and have since been in a constant state
							of learning and updating my skill-set. I find myself fascinated by front-end
							development and enjoy working with web frameworks such as React and Angular.
							My goal is to blend creativity with curiousity in order to create something distinct, 
							polished, and <em>deceptively</em> simple.
						<br/>
						<br/>
							Outside of coding you can expect to find me rehabilitating old bicycles,
							cooking up some delicious BBQ, or daydreaming about travel.
						</p>
				</div>
				<div className="col-md-6 col-sm-12 col-xs-12">
					<Canvas />
				</div>
			</section>
			);
	}
}

export default About;