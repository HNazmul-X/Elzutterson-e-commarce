import React from 'react';
import "./catagories.css"

const CatagoryItemCard = ({catagory}) => {
    const {name, image} = catagory;

    return (
        <>
            <div className="catagory-item-card">
                <div className="img-fluid ctgr-card-img">
                    <img src={image} alt="" />
                </div>
                    <div className="ctgr-caption">
                        <h3>{name}</h3>
                    </div>
            </div>
        </>
    );
};

export default CatagoryItemCard;