import React, {Component} from "react";

class Story extends Component {
    state = {
        message : ['hello world']
    }

    render() {
        return(
            <div>
                {this.state.message[0]}
            </div>
        )
    }
};

export default Story;