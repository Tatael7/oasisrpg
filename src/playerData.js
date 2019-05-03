export const initialState = {
  name: 'Duncan Idaho',
  img: '',
  imgName: '',
  alive: true,
  isAttacking: false,
  isSpecialing: false,
  isHealing: false,
  stats: {
    level: 0,
    health: 100,
    maxHealth: 100,
    mana: 2,
    maxMana: 2,
    strength: 1,
    defense: 1,
    magic: 1,
    critChance: 6
  },
  moves: [
    {
      id: 0,
      name: 'Attack',
      shortName: 'attack',
      type: 'basic',
      amt: 10,
      mana: 0,
      preReqs: {
        level: 0
      }
    },
    {
      id: 1,
      name: 'Magic Attack',
      shortName: 'magic',
      type: 'special',
      amt: 10,
      mana: 1,
      preReqs: {
        level: 0
      }
    },
    {
      id: 2,
      name: 'Heal',
      shortName: 'heal',
      type: 'support',
      amt: 50,
      mana: 1,
      preReqs: {
        level: 0
      }
    }
  ],
  potentialMoves: [
    {
      id: 3,
      name: 'Magic Blast',
      shortName: 'magicBlast',
      type: 'special',
      amt: 25,
      mana: 2,
      preReqs: {
        magic: 5
      }
    },
    {
      id: 3,
      name: 'Ice Blast',
      shortName: 'iceBlast',
      type: 'special',
      amt: 50,
      mana: 4,
      effects: ['freeze'],
      preReqs: {
        magic: 10
      }
    },
    {
      id: 4,
      name: 'Heavy Attack',
      shortName: 'heavyAttack',
      type: 'basic',
      amt: 25,
      mana: 1,
      effects: ['knockBack'],
      preReqs: {
        strength: 5
      }
    }, 
    {
      id: 5,
      name: 'Falcon Punch',
      shortName: 'falconPunch',
      type: 'basic',
      amt: 50,
      mana: 2,
      effects: ['knockBack', 'stun'],
      preReqs: {
        strength: 10
      }
    },
    {
      id: 6,
      name: 'Life Drain',
      shortName: 'lifeDrain',
      type: 'special',
      amt: 20,
      mana: 1,
      effects: ['drain'],
      preReqs: {
        maxHealth: 200
      }
    },
    {
      id: 7,
      name: 'Harden',
      shortName: 'harden',
      type: 'support',
      amt: 0,
      mana: 1,
      effects: ['harden'],
      preReqs: {
        defense: 5
      }
    },
    {
      id: 100,
      name: 'Hidden Test',
      shortName: 'test',
      type: 'special',
      amt: 20,
      mana: 2,
      preReqs: {
        level: 200
      }
    }
  ],
  potions: []
}