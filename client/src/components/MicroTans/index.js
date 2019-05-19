import React from "react";
import Valid from "card-validator";
import repairShield from "./item_healthUp.png";
import increaseMaxHealth from "./item_upMaxHealth.png";
import Crissaegrim from "./item_swordCrissaegrim.png";
import GodMode from "./item_godMode.png";
import MenuCurtain from "../../components/MenuCurtain";
import { Container, Row, Col } from "../Grid";
import "./style.css";

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
                   <MenuCurtain/>
                   <Container>
          <Row>
              <Col size="md-6" >
                    <ol>
                        <li className="itemSeparation">
                            <p>Buy a battery module to repair your shield.</p>
                            <img src={repairShield} className="border" alt="Repair Shield" height="200"/>
                        </li>
                        <li className="itemSeparation">
                            <p>Buy a new shield transistor to increase max shield.</p>
                            <img src={increaseMaxHealth} alt="Increase Max Sheild Strength" height="275"/>
                        </li>
                        <li className="itemSeparation">
                            <p>Buy the Legendary Sword Crissaegrim for critical hits.</p>
                            <img src={Crissaegrim} alt="legendary sword Crissaegrim" height="400"/>
                        </li>
                        <li className="itemSeparation">
                            <p>Aquire God Mode for invulnerablity.</p>
                            <img src={GodMode} alt="Metaphysical Evolution" height="250"/>
                        </li>
                    </ol>
                </Col>

              <Col size="md-6" >
                    <form className="card card-body">
                        <h2>Credit Card Entry</h2>
                        {/* <label htmlFor="fname">Accepted Cards</label> */}
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

                </Col>
              </Row>
            </Container>
        </div>
    )
    }
};

export default MicroTransactions;



