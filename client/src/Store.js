import React from "react";
import MicroTransactions from "./components/MicroTans";
import ShopTitle from "./components/ShopTitle";

class Store extends React.Component {
    render() {
        return (
            <div>
                <ShopTitle />
                <MicroTransactions/>
            </div>
            
        )
    };
}

export default Store;