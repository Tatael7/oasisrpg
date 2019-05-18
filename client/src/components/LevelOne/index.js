import React from "react";
import BattleMenu from "../BattleMenu";
import Story from "../Story";
import "../../stylesGame.css"

function LevelOne (props) {

    return (
        <div>
            <div>
                <Story
                    story={props.story}
                    style={{position:"fixed", zIndex:1}}
                />
            </div>
            <div>
                <BattleMenu
                    handleClickLeft={props.handleClickLeft}
                    handleClickRight={props.handleClickRight}
                    handleClickUp={props.handleClickUp}
                    style={{
                        bottom:"0",
                        position:"fixed", zIndex:-3}}
                />
            </div>
        </div>
       


    )
};

export default LevelOne;