import React, { Component } from 'react';
import './IntroScreen.css';
import AnimationPage from '../AnimationPage';

import { MDBAnimation } from "mdbreact";

class IntroScreen extends Component {
	pickCharacter(choice, result) {
		let imgSrc = ''
		let stat = ''
		switch (choice) {
			case 'fire':
				imgSrc = 'duncanIdaho.gif'
				stat = 'strength'

	
		}
		if (result === 'imgName') return `img/duncanIdaho/${imgSrc}`
		else if (result === 'stat') return stat
	}

	// luigiRandomizer() {
	// 	let randomNum = Math.ceil(Math.random() * 4)
	// 	switch (randomNum) {
	// 		case 1:
	// 			return 'strength'
	// 		case 2:
	// 			return 'defense'
	// 		case 3:
	// 			return 'magic'
	// 		case 4:
	// 			return 'maxHealth'
	// 		default:
	// 			return 'strength'
	// 	}
	// }

	handleName(e) {
		this.props.introChooseName(e.target.value)
	}

	handleChoice(e) {
		this.props.introChooseCharacter(e.target.value)
	}

	render() {
		return (
			<div><div>
				
				</div>
  <img className="logo" src="../../img/logo.jpg" alt=""/>

		<form
			onSubmit={e => {
				e.preventDefault()
				this.props.introSubmit(
					e.target.playerName.value,
					this.pickCharacter(e.target.skills.value, 'stat'),
					this.pickCharacter(e.target.skills.value, 'imgName'),
					e.target.skills.value
				)
				this.props.checkMovePreReqs()
			}}
		>
			<div className="intro-name">
				<input
					type="text"
					name="playerName"
					placeholder="Your Name"
					onChange={e => this.handleChoice(e)}
				/>
			</div>
			<div className="intro-selections">
				<div className="intro-selection">
					<label className="intro-form">
						<input
							type="radio"
							name="skills"
							value="fire"
							onClick={e => this.handleChoice(e)}
						/>
						<div className="intro-img-box">
							<h4>New Game</h4>
						
						</div>
					</label>
				</div>
		
			
			</div>
			<input className="intro-submit" type="submit" value="submit" />
		</form>
	</div>
)
	}
}

export default IntroScreen
