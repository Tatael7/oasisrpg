import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = () => {
    return (
        <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src="../../img/logo.jpg" />
        </MDBAnimation>
    );
};

export default AnimationPage;