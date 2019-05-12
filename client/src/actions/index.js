//will require GameWrapper to Map to Game.js

export const increaseEnemyCounter = () => ({
  type: 'INCREASE_ENEMY_COUNTER'
})

export const nextEnemy = level => ({
  type: 'NEXT_ENEMY'
})

export const needsLevelUp = () => ({
  type: 'NEEDS_LEVEL_UP'
})

export const levelUp = stat => ({
  type: 'LEVEL_UP',
  stat
})

export const levelUpStatChoose = stat => ({
  type: 'LEVEL_UP_STAT_CHOOSE',
  stat
})

export const checkMovePreReqs = () => ({
  type: 'CHECK_MOVE_PREREQS'
})

export const playerAttacks = (attackPow, strength, defense, crit) => ({
  type: 'PLAYER_ATTACKS',
  crit,
  damage: Math.ceil(((Math.pow(strength, 0.8) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.4) * attackPow * Math.random()) / Math.pow(defense, 0.6)))
})

export const playerSpecials = (attackPow, magic, level) => ({
  type: 'PLAYER_SPECIALS',
  damage: Math.ceil((Math.pow(magic, 0.8) * attackPow) +
    ((Math.pow(magic, 0.2) * attackPow * Math.random())))
})


export const enemyAttacks = (attackPow, strength, defense, enemyHealth) => ({
  type: 'ENEMY_ATTACKS',
  enemyHealth,
  damage: Math.ceil(((Math.pow(strength, 0.6) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.6) * (attackPow * 0.5)) * Math.random()) / Math.pow(defense, 0.6))
})

export const enemySpecials = (attackPow, magic, enemyHealth) => ({
  type: 'ENEMY_SPECIALS',
  enemyHealth,
  damage: Math.ceil((Math.pow(magic, 0.6) * attackPow) +
    ((Math.pow(magic, 0.2) * attackPow) * Math.random()))
})

export const playerDies = () => ({type: 'PLAYER_DIES'})

export const playerStartAttackPhase = () => ({type: 'PLAYER_START_ATTACK_PHASE'})

export const playerEndAttackPhase = () => ({type: 'PLAYER_END_ATTACK_PHASE'})

export const playerStartSpecialPhase = () => ({type: 'PLAYER_START_SPECIAL_PHASE'})

export const playerEndSpecialPhase = () => ({type: 'PLAYER_END_SPECIAL_PHASE'})


export const enemyStartAttackPhase = () => ({type: 'ENEMY_START_ATTACK_PHASE'})

export const enemyEndAttackPhase = () => ({type: 'ENEMY_END_ATTACK_PHASE'})

export const enemyStartSpecialPhase = () => ({type: 'ENEMY_START_SPECIAL_PHASE'})

export const enemyEndSpecialPhase = () => ({type: 'ENEMY_END_SPECIAL_PHASE'})


// export const introSubmit = (name, stat, img, imgName) => ({
//   type: 'INTRO_SUBMIT',
//   name,
//   stat,
//   img,
//   imgName
// })

// export const introChooseCharacter = character => ({
//   type: 'INTRO_CHOOSE_CHARACTER',
//   character
// })

// export const introChooseName = name => ({
//   type: 'INTRO_CHOOSE_NAME',
//   name
// })


// export const playerHeals = (currentHealth, maxHealth, magic) => ({
//   type: 'PLAYER_HEALS',
//   currentHealth,
//   maxHealth,
//   healAmt: Math.ceil((Math.pow(magic, 0.1) * (maxHealth * 0.5)) +
//     (Math.pow(magic, 0.1) * (maxHealth * 0.1) * Math.random()))
// })


//export const playerStartHealPhase = () => ({type: 'PLAYER_START_HEAL_PHASE'})

// export const playerEndHealPhase = () => ({type: 'PLAYER_END_HEAL_PHASE'})