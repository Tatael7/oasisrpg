import React from "react";
import BattleMenu from "../BattleMenu";
import Story from "../Story";


function LevelOne (props) {

    // function handleClickLeft() {
    //     console.log("you decided to go left");
    //     this.setState({message : "You turned left!"})
        
    // };

    // function handleClickRight() {
    //     console.log("this button is right");
    // };
    
    // function handleClickUp () {
    //     console.log("this button is up");
    // };

    return (
        <div>
            <div>
                {/* Map 1
                    start; go forward empty square go to square 2
                            turn right nothing
                            turn left 1 battle
                    square 2; right is battle 
                            forward is nothign 
                            left is empty suare 3
                    square 3; right is 2 battles
                            left is 1 battle 
                                  
                */}

            {/* Map 2; forward is battle
                        right is turn around
                        left is empty space 2
                space 2; left is turnaround
                        forward is empty space 3
                space 3; 

            
            */}
                
                <Story/>
            </div>
            <div>
                <BattleMenu
                    {...props}
                    handleClickLeft={props.handleClickLeft}
                    // handleClickRight={handleClickRight}
                    // handleClickUp={handleClickUp}
                />
            </div>
        </div>
       


    )
};

export default LevelOne;