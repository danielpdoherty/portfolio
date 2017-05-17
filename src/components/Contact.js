import React, { Component } from 'react';
import './contact.css';

class Contact extends Component{
	constructor(props){
		super(props);

		this.state = {
			name : '',
			phone : '',
			email : '',
			message: '',
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString()
		}
	}

	  addName(e){
  	e.preventDefault();
  	this.props.addItem(this.state.name);
  	this.setState({
  		name : ''
  	});
  }

  	  addPhone(e){
  	e.preventDefault();
  	this.props.addItem(this.state.phone);
  	this.setState({
  		phone : ''
  	});
  }

  	  addEmail(e){
  	e.preventDefault();
  	this.props.addItem(this.state.email);
  	this.setState({
  		email : ''
  	});
  }

  	  addMessage(e){
  	e.preventDefault();
  	this.props.addItem(this.state.message);
  	this.setState({
  		message : ''
  	});
  }

	render(){
			return(
			<section className="contact row">
				<div className="col-md-6 col-sm-12 col-xs-12">
					<form 
					action="https://formspree.io/danielpdoherty@gmail.com"
					method="POST"
					className="contactForm">
						<label>Name</label>
							<input 
							type="text" 
							name="name" 
							placeholder="Enter your name" 
							onChange={e=>this.setState({name: e.target.value})}/>
						<label>Phone Number</label>
							<input 
							type="text" 
							name="phone" 
							placeholder="Enter your phone" 
							onChange={e=>this.setState({phone: e.target.value})}/>
						<label>Email</label>
							<input 
							type="text" 
							name="email" 
							placeholder="Enter your email" 
							onChange={e=>this.setState({email: e.target.value})}/>
						<label>Message</label>
							<textarea
							wrap="hard"
							name="message"
							placeholder="Enter your message"
							onChange={e=>this.setState({message: e.target.value})}></textarea>
						<input type="submit" value="Submit" name="submit" />
					</form>
				</div>
				<div className="col-md-6 col-sm-12 col-xs-12">
					<div className="letter">
						<div className="date-time">
							<h4>{this.state.date}</h4>
							<h4>{this.state.time}</h4>
						</div>				
						<div className="greeting">
							<h3 className="letterName">{this.state.name}</h3>
							<h4 className="letterPhone">{this.state.phone}</h4>
							<h4 className="letterEmail">{this.state.email}</h4>
							<br/>
							<h3>Dear Daniel,</h3>
							<br/>
							<h6 className="letterMessage">{this.state.message}</h6>
						</div>
						<div className="ps">
							<h5>Thank you,</h5>
							<h3 className="letterSign">{this.state.name}</h3>
							<br />
						
							<h5>P.S.</h5>
							<h6>You're a very cool guy.</h6>
						</div>
						<div className="stamp">Approved</div>
					</div>
				</div>
			</section>					
			);
	}
}

export default Contact;