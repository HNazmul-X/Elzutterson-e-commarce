import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBanner from '../../../Components/PrimaryBanner/PrimaryBanner';
import "./SellPage.css"

const SellPage = () => {
    return (
        <div id="sell-page">
            <PrimaryBanner background={"https://i.ibb.co/pX8vMCr/image-4.png"}>
                <h1 className="text-light">Moving Out?</h1>
                <h3 className="text-light">Start Selling Today</h3>
                <div className="text-center">
                    <Link to="/drexel/seller-view">
                        <button className="mt-3 theme-button">Sell</button>
                    </Link>
                </div>
            </PrimaryBanner>
        </div>
    );
};

export default SellPage;