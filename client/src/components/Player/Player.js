import React from "react";
import Picture from "./duncanIdaho.gif";
// import "./DuncanIdaho.css"

function Player () {
  return (
      <div>
          <img src={Picture} alt="Player" height="300" width="300"/>
      </div>
  );
}

export default Player;


// import React from 'react'
// import './Player.css'

// const Player =({
  //      isAttacking}) => {
  //         let attackStatus = isAttacking ? 'attacking' : ''
         
  //         return(
  //           <div>
  //                  <img src={Picture} alt="Player" height="300" width="300"/>
  //            </div>    
  //       )
  // }


// const Player = ({name, img, imgName, level, health, mana, strength, defense, magic, maxHealth, maxMana, isAttacking, isSpecialing, isHealing}) => {
//   let attackStatus = isAttacking ? 'attacking' : ''
//   let healStatus = isHealing ? 'healing' : ''
//   let specialStatus
  
//   return(
//     <div className='player-container'>
//       <div className='img-container'>
//         {
//           imgName === 'fire' ? 
//           <div>
//             <img 
//               className={'player-image ' + attackStatus + ' ' + healStatus} 
//               src={img} 
//               alt={name} 
//             />
//             <div className={'fire-ball ' + specialStatus}></div>
//           </div>
//           : 
//           <img 
//             className={'player-image ' + attackStatus + ' ' + specialStatus + ' ' + healStatus} 
//             src={img} 
//             alt={name} 
//           />
//           }
//       </div>
//       <h3>{name}</h3>
//       <div className='status-bar' style={{width: maxHealth + 'px'}}>
//         <div className='player-health' style={{width: health + 'px'}}></div>
//       </div>
//       <div className='status-bar' style={{width: maxMana * 20 + 'px'}}>
//         <div className='player-mana' style={{width: mana * 20 + 'px'}}></div>
//       </div>
//       <div className='stats'>
//       <p className='stat'>Level: {level}</p>
//         <p className='stat'>Strength: {strength}</p>
//         <p className='stat'>Sheilds: {defense}</p>
//         <p className='stat'>Pulse Energy: {magic}</p>
//         <p className='stat'>Max Health: {maxHealth}</p>
//         <p className='stat'>Max Mana: {maxMana}</p>
//       </div>
//     </div>
//   )
// }

// export default Player
