import React from "react";
import BattleMenu from "../BattleMenu";


function LevelOne () {

    function handleClickLeft() {
        console.log("you decided to go left");
        return (
            <div>
                <p>You turned left and ran into a wall dumbass</p>
            </div>
        );

    };

    function handleClickRight() {
        console.log("this button is right");
    };
    
    function handleClickUp () {
        console.log("this button is up");
    };
    

    return (
        <div>
            <div>
                <p>You enter an alley way, you can go left, forward, or right. Time to make a decision hero.</p>
            </div>
            <div>
                <BattleMenu
                    handleClickLeft={handleClickLeft}
                    handleClickRight={handleClickRight}
                    handleClickUp={handleClickUp}
                />
            </div>
        </div>
       


    )
};

export default LevelOne;