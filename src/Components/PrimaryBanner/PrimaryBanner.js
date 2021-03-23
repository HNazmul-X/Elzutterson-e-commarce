import React from 'react';
import { DynamicBG } from '../StyledComponents/StyledComponents';
import "./PrimaryBanner.css"



const PrimaryBanner = ({ background , children}) => {
    return (
        <>
            <DynamicBG background={background}>
                <div className="banner-container container">
                    <div className="desc">
                        {
                            children
                        }
                    </div>
                </div>
            </DynamicBG>
        </>
    );
};

export default PrimaryBanner;