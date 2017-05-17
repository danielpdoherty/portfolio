import React, { Component } from 'react';
import resume from '../img/modalresume.pdf';
import './resume.css';

class Resume extends Component{


	render(){
		return(
			<section className="resume row">
				<iframe src={resume}></iframe>
			</section>
			);
	}
}

export default Resume;