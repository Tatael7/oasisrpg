import React from "react";
import "./style.css";


class MenuCurtain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render () {
        return (
            <div id="myNav"
                className="overlay" 
                style={this.state.open ? {width: "50%"}:  {width: "45px"}}
            >
                
                {this.state.open ? 
                    <div>
                        <a href="javascript:void(0)" 
                            className="closebtn" 
                            onClick={this.closeNav}
                        >
                            &times;
                        </a>
                        <div className="overlay-content">
                            <div class="items">
                                <a href="/">Main Menu</a>
                                <a href="/intro">New Game</a>
                                <a href="/login">Login</a>
                                <a href="/Store">Item Shop</a>
                                <a href="/leaderBoard">Leader Board</a>
                            </div>
                        </div>
                    </div>: undefined}

                {!this.state.open ? 
                    <span className="overlay-open" 
                        onClick={this.openNav}
                    >
                        &#9776;
                    </span> : undefined }
            </div>
        );
    }

    openNav = () => {
        this.setState({
            open: true
        });
      }

    closeNav = () => {
        console.log("close nav function")
        this.setState({
            open: false
        });
      }
    
}


  
export default MenuCurtain;