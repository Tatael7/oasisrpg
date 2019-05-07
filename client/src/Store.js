import React from "react";
import MicroTransactions from "./components/MicroTans";

class Store extends React.Component {
    render() {
        return (
            <div>
                <MicroTransactions/>
                <button className="btn btn-danger">Submit</button>
            </div>
            
        )
    };
}

export default Store;