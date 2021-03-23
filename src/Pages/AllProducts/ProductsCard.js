import React from 'react';
import "./all-products.css"
import drexel_logo from "../../images/drexel-university-logo.png"
import penn_logo from "../../images/penn-uivaercity-logo.png"
import tample_logo from "../../images/tample-university-logo.png"
import { useHistory } from 'react-router';

const ProductsCard = ({ markLogo, linkId }) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/${linkId}/product-view`)} className="product-card">
            <img src={markLogo === "drexel" ? drexel_logo : markLogo === "penn" ? penn_logo : markLogo === "tample" ? tample_logo : ""} alt="" className="mark-logo" />
            <div className="product-image">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41HfDkXXyeL._AC_US218_.jpg" alt="" />
            </div>
            <div className="desc">
                <h4>name</h4>

                <button className="btn btn-sm btn-warning">Details</button>
            </div>
        </div>
    );
};

export default ProductsCard;