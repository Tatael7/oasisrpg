import React, {Component} from 'react'
import './Enemy.css'

class Enemy extends Component {
  render () {
    let percentage = 100 / this.props.maxHealth
    let attackStatus = this.props.isAttacking ? "en-attacking" : "waiting"
    let specialStatus = this.props.isSpecialing ? "en-specialing" : ""
    return (
      <div className="enemy-container">
        {
          this.props.health > 0 ?
            <div className="enemy-info">
              <div className="img-container">
                <img 
                  src={this.props.img} 
                  alt={this.props.name} 
                  className={"enemy-image " + attackStatus + " " + specialStatus}
                />
              </div>
              <h3>{this.props.name}</h3>
              <div className="health-bar">
                <div
                  className="enemy-health"
                  style={{width: this.props.health*percentage + "px"}}
                ></div>
              </div>
            </div> :
          <div></div>
        }
      </div>
    )
  }
}

export default Enemy
