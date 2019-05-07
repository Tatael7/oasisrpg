import React from "react";
import Potion from "./potion.jpeg";
import ExBoost from "./exBoost.jpeg";
import Crissaegrim from "./criss.png";
import GodMode from "./godMode.jpg";
// import PaymentOptions from "../PaymentOptions";
// const payment = require("react-payment");

function MicroTransactions() {
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ol>
                        <li>
                            <img src={Potion} alt="a potion" height="50" width="50"/>
                            <p>Buy a health potion to boost your overall health.</p>
                        </li>
                        <li>
                            <img src={ExBoost} alt="an experience boost" height="50" width="50"/>
                            <p>Buy a medallion that boosts your experience ten-fold.</p>
                        </li>
                        <li>
                            <img src={Crissaegrim} alt="legendary sword Crissaegrim" height="50" width="50"/>
                            <p>Buy the Legendary Sword Crissaegrim and rend your enemies to ribbons.</p>
                        </li>
                        <li>
                            <img src={GodMode} alt="final form Duncan" height="100" width="50"/>
                            <p>Aquire God Mode Duncan to breeze through the game.</p>
                        </li>
                    </ol>
                </div>
                <div className="col-lg6">
                    
                </div>
            </div>
        </div>
    )
}

export default MicroTransactions;
