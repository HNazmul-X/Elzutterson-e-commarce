import React from "react";
import "../CartPage/CartPage.css";

const CartItem = () => {
    return (
        <div id="cart-item">
            <div className="row align-items-center">
                <div className="col-3 col-md-4 img-cover">
                    <div className="cart-item-img"></div>
                </div>
                <div className="col-9 col-md-8">
                    <div className="pd-name">
                        <h5>Product Name</h5>
                    </div>
                    <div className="pd-status">
                        <h5>Sold</h5>
                    </div>
                </div>
            </div>
            <div className="price">
                <h4 className="text-light">$400.00</h4>
            </div>
        </div>
    );
};

export default CartItem;
