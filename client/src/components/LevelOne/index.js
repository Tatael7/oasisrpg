import React from "react";
import BattleMenu from "../BattleMenu";
import Story from "../Story";

function LevelOne (props) {

    return (
        <div>
            <div>
                <Story
                    story={props.story}
                />
            </div>
            <div>
                <BattleMenu
                    handleClickLeft={props.handleClickLeft}
                    handleClickRight={props.handleClickRight}
                    handleClickUp={props.handleClickUp}
                    
                />
            </div>
        </div>
       


    )
};

export default LevelOne;