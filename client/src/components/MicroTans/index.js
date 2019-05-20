import React from "react";
import Valid from "card-validator";
import Potion from "./potion.jpeg";
import ExBoost from "./exBoost.jpeg";
import Crissaegrim from "./criss.png";
import GodMode from "./godMode.jpg";


let numberValidation = Valid.number("4111");



// if (!numberValidation.isPotentiallyValid) {
//     renderInvalidCardNumber();
// }
// if (numberValidation.card) {
//     console.log(numberValidation.card.type);
// }

// renderInvalidCardNumber = () => {
//     console.log("invalid");
// }

class MicroTransactions extends React.Component {
    render(){
        console.log(numberValidation);
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
                    <form className="card card-body">
                        <h3>Payment</h3>
                        <label htmlFor="fname">Accepted Cards</label>
                        <div className="icon-container">
                            {/* <i class="fa fa-cc-visa" style="color:navy;"></i>
                            <i class="fa fa-cc-amex" style="color:blue;"></i>
                            <i class="fa fa-cc-mastercard" style="color:red;"></i>
                            <i class="fa fa-cc-discover" style="color:orange;"></i> */}
                        </div>
                        <label htmlFor="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John Doe"/>
                        <label htmlFor="cnum">Number on Card</label>
                        <input type="number" id="cnum" name="cardNumber" placeholder="1111222233334444"/>
                        <label htmlFor="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>

                    </form>

                    <button className="btn btn-danger">Submit</button>

                </div>
            </div>
        </div>
    )
    }
};

export default MicroTransactions;



