import React, {Component} from 'react'
import './LevelUp.css'

class LevelUp extends Component {
  handleStatChoice(e) {
    this.props.levelUpStatChoose(e.target.value)
  }

  render () {
    return (
      <div>
        <h3>Level Up!</h3>
        <p>Choose a Skill to Increase!</p>
        <form>
          <div>
            <label>Strength</label>
            <input 
              type="radio" 
              name="skills" 
              value="strength" 
              onClick={e => this.handleStatChoice(e)}
            />
          </div>
          <div>
            <label>Defense</label>
            <input 
              type="radio" 
              name="skills" 
              value="defense"
              onClick={e => this.handleStatChoice(e)}
            />
          </div>
          <div>
            <label>Magic</label>
            <input 
              type="radio" 
              name="skills" 
              value="magic"
              onClick={e => this.handleStatChoice(e)}
            />
          </div>
          <div>
            <label>Max Health</label>
            <input 
              type="radio" 
              name="skills" 
              value="maxHealth"
              onClick={e => this.handleStatChoice(e)}
            />
          </div>
          <input
            type="button"
            value="Next Enemy"
            onClick={((e) => {
              this.props.levelUp(e.target.form.skills.value)
              this.props.checkMovePreReqs()
              this.props.increaseEnemyCounter()
              this.props.nextEnemy()
            })}
          />
        </form>
      </div>
    )
  }
}

export default LevelUp
