
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MyThemeContext } from '../../App';
import BottomBar from '../../Components/BottomBar/BottomBar';
import { MyCarousel } from '../../Components/Carousel/MyCarousel';
import Navbar from '../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../Components/StyledComponents/StyledComponents';

const ProductView = () => {

    const [isProductSilderShow, setIsProductSliderShow] = useState(true)
    const [myTheme, setMyTheme] = useContext(MyThemeContext);
    const { schoolId } = useParams();
    const tampleBg = "linear-gradient(#011F5B,#990000)";
    const drexelBg = "linear-gradient(#E0A414,#1A3478)";
    const pennBg = "linear-gradient(#9D2235,#9D2235)";

    useEffect(() => {
        if (schoolId === "drexel") {
            setMyTheme({
                background: drexelBg,
            });
        } else if (schoolId === "penn") {
            setMyTheme({
                background: pennBg,
            });
        } else if (schoolId === "tample") {
            setMyTheme({
                background: tampleBg,
            });
        }
    }, [setMyTheme, schoolId]);



    return (
        <>
            <Navbar />
            <div className="seller-view-page">
                <PageContainer>
                    <PageSection className="item-preview-area" width="33%">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </PageSection>
                    <PageSection className="form-area" width="60%">
                        <div className="upper-form">
                            <div className="row">
                                <div className="col-8 one ">
                                    <input type="text" placeholder="Name of Product" className=" mb-2 form-control name" />
                                    <input type="text" placeholder="Data posted" className="w-75 mb-2  form-control data" />
                                    <input type="text" placeholder="catagory" className="w-75  mb-2 form-control catagory" />
                                </div>
                                <div className="col-4 two">
                                    <input type="text" placeholder="$00.0" className="form-control h-75 price" />
                                </div>
                            </div>
                        </div>
                        <div className="lower-form">
                            <textarea onClick={() => setIsProductSliderShow(!isProductSilderShow)} name="" id="" cols="30" rows="8" placeholder="Description" className="form-control"></textarea>
                        </div>
                    </PageSection>
                </PageContainer>
                <BottomBar />
                <MyCarousel isShow={isProductSilderShow}>
                    <div onClick={() => setIsProductSliderShow(false)} className="carousel-hider"></div>
                </MyCarousel>
            </div>
        </>
    );
};

export default ProductView;