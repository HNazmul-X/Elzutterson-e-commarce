import React, { useEffect } from "react";
import { PageContainer, PageSection } from "../../Components/StyledComponents/StyledComponents";
import CatagoryItemCard from "./CatagoryItemCard";
import Navbar from "../../Components/Navbar/Navbar";
import CTGR_1 from "../../images/altumcode-Ui3zMjpMrmM-unsplash1.png"
import CTGR_3 from "../../images/clayton-robbins-ihqB-c8C7Bc-unsplash.png"
import CTGR_4 from "../../images/ed-robertson-eeSdJfLfx1A-unsplash1.png"
import CTGR_5 from "../../images/nathan-dumlao-mZZ0ls7X9tc-unsplash.png"
import CTGR_6 from "../../images/text-photo.png"
import CTGR_2 from "../../images/furniture-image.png"

const Catagories = () => {
    const catagories = [
        {
            name: "",
            image: CTGR_1,
        },
        {
            name: "Furniture",
            image: CTGR_2,
        },
        {
            name: "School essencials",
            image: CTGR_3,
        },
        {
            name: "Books ",
            image: CTGR_4,
        },
        {
            name: "Other",
            image: CTGR_5,
        },
        {
            name: "",
            image: CTGR_6,
        },
    ];

    useEffect(() => {
        const catagoriesContainer = document.querySelector(".catagories-container");
        const catagoryCards = document.querySelectorAll(".catagory-item-card");
        catagoriesContainer.style.width = (catagoryCards.length / 2) * 380 + "px";
    }, []); // enter your defendency if you want to change anything

    return (
        <div className="pt-4 all-catagory">
            <div className="pt-5"></div>
            <Navbar></Navbar>
            <div className="text-center">
                <h1 className="p-3 text-light">Catagories</h1>
            </div>
            <div className="">
                <div className="catagories-container ">
                    {catagories.map((catagory) => (
                        <CatagoryItemCard  catagory={catagory} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catagories;
