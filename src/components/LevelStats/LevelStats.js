import React, {Component} from 'react'
import LevelUpWrapper from '../../containers/LevelUpWrapper'
import './LevelStats.css'

class LevelStats extends Component {
  componentWillUpdate() {
    if (this.props.playerHealth <= 0) this.props.playerDies()
  }
  componentDidUpdate() {
    if (this.props.enemyName === 'winner') console.log('You win!')
    if (this.props.enemyHealth <= 0) this.props.needsLevelUp()
  }

  fadeText(className) {
    let elements = Array.from(document.querySelectorAll(className))
    elements.forEach((el) => {
      el.classList.remove('hide')
    })
    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('hide')
      })
    }, 1000)
  }

  handleAction(moveName) {
    if (moveName === 'attack') this.handleAttack()
    if (moveName === 'magic') this.handleSpecial()
    if (moveName === 'heal') this.handleHeal()
  }

  handleAttack() {
    let playerCrit = Math.ceil(Math.random() * this.props.playerHitChance) === this.props.playerHitChance
    this.props.playerAttacks(
      this.props.playerAttack.amt,
      this.props.playerStrength,
      this.props.enemyDefense,
      playerCrit
    )
    this.props.playerStartAttackPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.damage-text.enemy-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndAttackPhase()
    }, 1000)
  }

  handleSpecial() {
    this.props.playerSpecials(
      this.props.playerSpecial.amt,
      this.props.playerMagic,
      this.props.playerLevel
    )
    this.props.playerStartSpecialPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.damage-text.enemy-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndSpecialPhase()
    }, 1000)
  }

  handleHeal() {
    this.props.playerHeals(
      this.props.playerHealth,
      this.props.playerMaxHealth,
      this.props.playerMagic
    )
    this.props.playerStartHealPhase()
    this.handleEnemyResponse()
    setTimeout(() => {
      this.fadeText('.player-text.heal-text')
    }, 10)
    setTimeout(() => {
      this.props.playerEndHealPhase()
    }, 1000)
  }

  handleEnemyResponse() {
    let isSpecialing = Math.ceil(Math.random() * 4) === 4
    setTimeout(() => {
      isSpecialing ? 
        this.props.enemySpecials(
          this.props.enemyAttack,
          this.props.enemyMagic,
          this.props.enemyHealth
        ) :
        this.props.enemyAttacks(
          this.props.enemyAttack,
          this.props.enemyStrength,
          this.props.playerDefense,
          this.props.enemyHealth
        )
      this.props.enemyStartAttackPhase()
      this.fadeText('.damage-text.player-text')
      setTimeout(() => {
        this.props.enemyEndAttackPhase()
      }, 1000)
    }, 1000)
  }

  render() {
    let playerHitCrit = this.props.playerHitCrit ?
      <p className='damage-text enemy-text'>Critial Hit!</p> : ''
    let enemyDmgTaken = this.props.enemyDmgTaken ? 
      <div>
        <p className='damage-text enemy-text'>{this.props.enemyDmgTaken}</p>
        {playerHitCrit}
      </div> : ''
    let playerDmgTaken = this.props.playerDmgTaken ?
      <p className='damage-text player-text'>
        {this.props.playerDmgTaken}
      </p> : '' 
    let playerHealAmt = this.props.playerLastMove === 'heal' ?
      <p className='heal-text player-text'>
        {this.props.playerHealAmt}
      </p> :  ''
    let enemyFallen = this.props.enemyHealth <= 0 ? 
      <p className='damage-text enemy-text'>
        {this.props.enemyName} has fallen!
      </p> : ''
    return (
      <div className='level-stats'>
        {this.props.playerHealth <= 0 ?
          <h2>You are dead</h2> 
          :
          this.props.enemyHealth > 0 ?
            <div className='action-buttons'>
              {this.props.moves.map(move => (
                this.props.playerMana > 0 || !move.mana ?
                  !this.props.enemysTurn ?
                    <button
                      key={move.id}
                      className={`action-button ${move.type}-button`}
                      onClick={() => this.handleAction(move.shortName)}
                    >{move.name} {move.mana ? `(${move.mana} mana)` : ''}</button> 
                    : 
                    <button
                      key={move.id}
                      className='action-button fake-button'
                    >{move.name} {move.mana ? `(${move.mana} mana)` : ''}</button> 
                  :
                  <button 
                    key={move.id} 
                    className='action-button no-mana'
                  >Out of Mana!
                  </button>
              ))}
            </div> : <div></div>
        }
        {this.props.isLevelingUp ?
          <LevelUpWrapper /> : null
        }
        <div className='action-text'>
          <div className='player-text-box'>
            {playerHealAmt}
            {playerDmgTaken}
          </div>
          <div className='enemy-text-box'>
            {enemyFallen}
            {enemyDmgTaken}
          </div>
        </div>
      </div>
    )
  }
}

export default LevelStats
