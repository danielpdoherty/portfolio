import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.css';

class Header extends Component {
	render(){
		return(
			<header className="row">					
				<nav className="navbar navbar-default">
					<div className="headerName col-md-4 col-sm-12">
						<h1 id="headerName">Daniel Doherty </h1>
						<h3>Web Developer</h3>
					</div>
					<div className="siteNav col-md-4 col-sm-12">
						<ul className="">
							<li>
								<IndexLink to="/" 
								activeClassName="active"
								className="w3-btn w3-round w3-ripple">
								About Me
								</IndexLink>
							</li>
							<li>
								<Link to="/portfolio" 
								activeClassName="active"
								className="w3-btn w3-round w3-ripple">
								Portfolio
								</Link>
							</li>
							<li>
								<Link to="/resume" 
								activeClassName="active"
								className="w3-btn w3-round w3-ripple">
								Resume
								</Link>
							</li>
							<li>
								<Link to="/contact" 
								activeClassName="active"
								className="w3-btn w3-round w3-ripple">
								Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			);
	}
}

export default Header;