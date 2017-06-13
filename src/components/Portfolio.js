import React, { Component } from 'react';
import './portfolio.css';

import dineBackground from '../img/dine1.JPG';
import charBackground from '../img/charity1.JPG';
import momBackground from '../img/callmom1.JPG';
import aboutBackground from '../img/about1.JPG';
import winBackground from '../img/errors.JPG';
import dineWeb from '../img/dine2.JPG';
import dineCode from '../img/dine3.JPG';
import charWeb from '../img/charity2.JPG';
import charCode from '../img/charity3.JPG';
import momWeb from '../img/callmom2.JPG';
import momCode from '../img/callmom3.JPG';
import webWeb from '../img/about1.JPG';
import webCode from '../img/about2.JPG';
import winWeb from '../img/windows1.JPG';
import winCode from '../img/windows2.JPG';



class Portfolio extends Component{
	openDineModal(e){
		e.preventDefault();
		document.getElementById('dineT').style.display='block';
	}

	closeDineModal(e){
		e.preventDefault()
		document.getElementById('dineT').style.display='none';
	}

	openCharModal(e){
		e.preventDefault();
		document.getElementById('charW').style.display='block';
	}

	closeCharModal(e){
		e.preventDefault()
		document.getElementById('charW').style.display='none';
	}

	openMomModal(e){
		e.preventDefault();
		document.getElementById('callM').style.display='block';
	}

	closeMomModal(e){
		e.preventDefault()
		document.getElementById('callM').style.display='none';
	}

	openWebModal(e){
		e.preventDefault();
		document.getElementById('webP').style.display='block';
	}

	closeWebModal(e){
		e.preventDefault()
		document.getElementById('webP').style.display='none';
	}

	openWinModal(e){
		e.preventDefault();
		document.getElementById('win9').style.display='block';
	}

	closeWinModal(e){
		e.preventDefault()
		document.getElementById('win9').style.display='none';
	}

	render(){
		return(
			<section className="portfolio row">
				<div className="w3-container">
					<div className="col-md-12 col-sm-12 col-xs-12 dTune">
						<a href="#" 
						onClick={this.openDineModal}>
							<img src={dineBackground} alt="DineTuning" />
							<h5>DineTuning</h5>
						</a>
						 <div id="dineT" className="w3-modal">
					    	<div className="w3-modal-content">
						      <header className="w3-container w3-teal"> 
						        <span onClick={this.closeDineModal} 
						        className="w3-button w3-display-topright">&times;</span>
						        <h2>DineTuning</h2>
						        <p>A collaborative project completed in 4 days. Made with ReactJS framework, and using 
								firebase for scalable data population.</p>
						        <a href="https://danielpdoherty.github.io/food-project/#/omni" target="_blank">
						        	<button>Visit Live Site</button>
						        </a>
						        <a href="https://github.com/danielpdoherty/food-project" target="_blank">
						        	<button className="githubRepo">Visit Github Repo</button>
						        </a>
						      </header>
						      	<div className="imgBlock">
						        	<img className="modalImage" src={dineWeb} alt="Dinetuning Site" />
						        	<img className="modalImage" src={dineCode} alt="Dinetuning Code" />
					    		</div>
					    	</div>
						</div>
					</div>
				</div>
				<div className="w3-container">
					<div className="col-md-12 col-sm-12 col-xs-12 cWish">
						<a href="#" 
						onClick={this.openCharModal}>
							<img src={charBackground} alt="Charity Wish" />
							<h5>Charity Wish</h5>
						</a>
						 <div id="charW" className="w3-modal">
					    	<div className="w3-modal-content">
						      <header className="w3-container w3-teal"> 
						        <span onClick={this.closeCharModal} 
						        className="w3-button w3-display-topright">&times;</span>
						        <h2>Charity Wish</h2>
						        <p>A collaborative project completed in 5 days. This website was designed by a team of UX 
								students and built out by my small team. It demonstrates excellent use of jQuery, Ajax,
								and Bootstrap's javascript library.</p>
						      	<a href="https://sgoldgar.github.io/CharityProject_FrontEnd/index.html" target="_blank">
						        	<button>Visit Live Site</button>
						        <a href="https://github.com/Hooli-ana/charityProject" target="_blank">
						        	<button className="githubRepo">Visit Github Repo</button>
						        </a>
						        </a>
						      </header>
						      	<div className="imgBlock">
						        	<img className="modalImage" src={charWeb} alt="Charity Wish Site" />
						        	<img className="modalImage" src={charCode} alt="Charity Wish Code" />
					    		</div>
					    	</div>
						</div>
					</div>
				</div>
				<div className="w3-container">
					<div className="col-md-12 col-sm-12 col-xs-12 cMom">
						<a href="#" 
						onClick={this.openMomModal}>
							<img src={momBackground} alt="Whenyoucallyourmom.com" />
							<h5>Whenyoucallyourmom.com</h5>
						</a>
						 <div id="callM" className="w3-modal">
					    	<div className="w3-modal-content">
						      <header className="w3-container w3-teal"> 
						        <span onClick={this.closeMomModal} 
						        className="w3-button w3-display-topright">&times;</span>
						        <h2>When You Call Your Mom.com</h2>
						        <p>I used this as a final project during my web development course. It's supposed to be
						        	a humorous website for when you call your parents and are unsure of what to talk about.
						        	It was made in React and makes good use of react-router and firebase for a clean and highly functional site.
						        </p>
						        <a href="https://danielpdoherty.github.io/callyourmom/#/" target="_blank">
						        	<button>Visit Live Site</button>
						        </a>
						        <a href="https://github.com/danielpdoherty/callyourmom" target="_blank">
						        	<button className="githubRepo">Visit Github Repo</button>
						        </a>
						      </header>
						      	<div className="imgBlock">
						      		<img className="modalImage" src={momWeb} alt="Call Mom Site" />
						        	<img className="modalImage" src={momCode} alt="Call Mom Code" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w3-container">
					<div className="col-md-12 col-sm-12 col-xs-12 wPres">
						<a href="#" 
						onClick={this.openWebModal}>
							<img src={aboutBackground} alt="Static Web Presence" />
							<h5>Static Web Presence</h5>
						</a>
						 <div id="webP" className="w3-modal">
					    	<div className="w3-modal-content">
						      <header className="w3-container w3-teal"> 
						        <span onClick={this.closeWebModal} 
						        className="w3-button w3-display-topright">&times;</span>
						        <h2>Web Presence</h2>
						        <p>This was one of my first projects. I originally designed it for my personal website
								but decided to build out another. I am however proud of the design and logic, and I 
								it demonstrates my ability in the frontend well.</p>
						       	<a href="https://danielpdoherty.github.io/about_me/" 
						       	target="_blank">
						        	<button>Visit Live Site</button>
						        </a>
								<a href="https://github.com/danielpdoherty/about_me" target="_blank">
						        	<button className="githubRepo">Visit Github Repo</button>
						        </a>
						      </header>
						      	<div className="imgBlock">
						      		<img className="modalImage" src={webWeb} alt="Web Presence Site" />
						        	<img className="modalImage" src={webCode} alt="Web Presence Code" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w3-container">
					<div className="col-md-12 col-sm-12 col-xs-12 w95">
						<a href="#" 
						onClick={this.openWinModal}>
							<img src={winBackground} alt="Windows 95" />
							<h5>Windows 95</h5>
						</a>
						 <div id="win9" className="w3-modal modal">
					    	<div className="w3-modal-content">
						      <header className="w3-container w3-teal"> 
						        <span onClick={this.closeWinModal} 
						        className="w3-button w3-display-topright">&times;</span>
						        <h2>Windows 95 Sandbox</h2>
						        <p>This is an ongoing personal project. I wanted to learn how to work with ReactJS so
								I decided to build this site that emulates the Windows 95 operating system, though as
								a website.</p>
						        <button className="workInProg">Work In Progress</button>
						      </header>
						      	<div className="imgBlock">
						        	<img className="modalImage" src={winWeb} alt="Web Presence Site" />
						        	<img className="modalImage" src={winCode} alt="Web Presence Code" />
					    		</div>
					    	</div>

						</div>
					</div>
				</div>
			</section>
			);
	}
}

export default Portfolio;