import React, { Component } from 'react';

class Canvas extends Component{
	componentDidMount(){
		this.updateCanvas();
	};
	updateCanvas(){
			const c = document.getElementById("myCanvas");
			const ctx = this.refs.canvas.getContext("2d");
		function drawHTML(){
			ctx.font = "20px Arial";
			ctx.shadowColor = 'red';
			ctx.shadowBlur = 10;
			ctx.shadowOffsetX = 1;
			ctx.shadowOffsetY = 1;
			ctx.fillStyle = 'white';
			ctx.fillText("HTML5",10,50);
			ctx.moveTo(50,55);
			ctx.lineTo(50,100);
			ctx.strokeStyle = 'white';
			ctx.stroke();
		}

		function drawCSS(){
			ctx.font = "20px Arial";
			ctx.fillText("CSS",50,120);
			ctx.moveTo(55,125);
			ctx.lineTo(60,150);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("Bootstrap",60,170);
			ctx.moveTo(50,55);
			ctx.lineTo(200,150);
			ctx.stroke();
		}

		function drawJS(){
			ctx.font = "20px Arial";
			ctx.fillText("Javascript",200,170);
			ctx.moveTo(230,150);
			ctx.lineTo(170,80);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("jQuery",150,75);
			ctx.moveTo(150,65);
			ctx.lineTo(140,40);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("AJAX",130,30);
			ctx.moveTo(140,20);
			ctx.lineTo(140,0);
			ctx.stroke();
		}

		function drawAPI(){
			ctx.moveTo(140,400);
			ctx.lineTo(140,380);
			ctx.stroke();
			ctx.font = "20px Arial";
			ctx.fillText("RESTful APIs",130,370);
		}

		function drawFrameworks(){
			ctx.moveTo(260,150);
			ctx.lineTo(270,90);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("ReactJS",250,80);
			ctx.moveTo(280,65);
			ctx.lineTo(260,40);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("React Native",240,30);
			ctx.moveTo(320,75);
			ctx.lineTo(340,80);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("Redux",350,90);
			ctx.moveTo(300,170);
			ctx.lineTo(320,180);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("AngularJS",320,190);
		}

		function drawNode(){
			ctx.moveTo(240,180);
			ctx.lineTo(230,240);
			ctx.stroke();
			ctx.font = "20px Arial";
			ctx.fillText("Node.js",210,255);
			ctx.moveTo(285,255);
			ctx.lineTo(320,265);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("CLI",330,280);
			ctx.moveTo(340,290);
			ctx.lineTo(350,320);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("Git",340,340);
		}

		function drawBackend(){
			ctx.moveTo(200,260);
			ctx.lineTo(170,280);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("Express",120,300);
			ctx.moveTo(110,280);
			ctx.lineTo(80,250);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("NoSQL",50,240);
			ctx.moveTo(110,295);
			ctx.lineTo(70,310);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("SQL",30,315);
			ctx.moveTo(115,310);
			ctx.lineTo(70,340);
			ctx.stroke();
			ctx.font = "12px Arial";
			ctx.fillText("Firebase",30,355);
			ctx.moveTo(140,310);
			ctx.lineTo(170,340);
			ctx.stroke();
		}

		function drawPython(){
			ctx.moveTo(320,290);
			ctx.lineTo(290,310);
			ctx.stroke();
			ctx.font = "15px Arial";
			ctx.fillText("Python",240,320);
			ctx.moveTo(245,330);
			ctx.lineTo(225,350);
			ctx.stroke();
		}

		function canvasInit(){
			 setTimeout(function() { drawHTML(); }, 1000);
				setTimeout(function() { drawCSS(); }, 2000);
				setTimeout(function() { drawJS(); }, 3000);
				setTimeout(function() { drawAPI(); }, 4000);
				setTimeout(function() { drawFrameworks(); }, 5000);
				setTimeout(function() { drawNode(); }, 6000);
				setTimeout(function() { drawBackend(); }, 7000);
				setTimeout(function() { drawPython(); }, 8000);
		}
		canvasInit();

		function reset(){
			document.getElementById('reset').addEventListener('click', function() {
		        ctx.clearRect(0, 0, c.width, c.height);
		        canvasInit()
		      }, false);
		}
		reset();
	}

	render(){

	
		return(
			<div className="centeringDiv">
				<canvas ref="canvas" id="myCanvas" width="400px" height="400px">
				Your browser does not support the HTML5 canvas tag.</canvas>
				<button id="reset" className="w3-btn w3-round w3-ripple">Reset</button>
			</div>
		);	
	}
}

export default Canvas;