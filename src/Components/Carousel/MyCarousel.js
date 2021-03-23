import React, { Children, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

export const MyCarousel = ({ isShow ,children}) => {

    const items = [
        <div className="item" data-value="1">
            <h1>Carousel 1</h1>
        </div>,
        <div className="item" data-value="2">
            <h1>Carousel 2</h1>
        </div>,
        <div className="item" data-value="3">
            <h1>Carousel 1</h1>
        </div>,
        <div className="item" data-value="4">
            <h1>Carousel 2</h1>
        </div>,
        <div className="item" data-value="5">
            <h1>Carousel 2</h1>
        </div>,
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const onSlideChanged = ({ item }) => setActiveIndex(item);

    return (
        <>
            <div className={isShow ? "carousel_container" : "d-none"}>
                <div className="carousel_my_wrapper">
                    <AliceCarousel mouseTracking disableDotsControls disableButtonsControls infinite items={items} activeIndex={activeIndex} onSlideChanged={onSlideChanged} />,
                    <div className="b-refs-buttons">
                        <button className="prev_button" onClick={slidePrev}>
                            &#60;
                        </button>
                        <button className="next_button" onClick={slideNext}>
                            &#62;
                        </button>
                    </div>
                </div>
            {children}
            </div>
        </>
    );
};
