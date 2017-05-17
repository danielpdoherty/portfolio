import React, { Component } from 'react';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import './footer.css';

class Footer extends Component{
	render(){
		// let x = screen.width
		// if (document.documentElement.clientWidth <= x){
		// 	getElementById('#theFooter').classList.remove('navbar-fixed-bottom');
		// } else return

		return(
			<div id="theFooter" className="footer navbar-fixed-bottom">
				<p>Daniel Doherty 2017</p>
				<a target="_blank" href="https://github.com/danielpdoherty">
					<img src={github} alt="LinkedIn" />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/dandoher/">
					<img src={linkedin} alt="Github" />
				</a>
			</div>
			);
	}
}

export default Footer;