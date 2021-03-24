import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { PageContainer, PageSection } from "../../Components/StyledComponents/StyledComponents";
import AboutUs from "./AboutUs/AboutUs";
import BottomBar from "../../Components/BottomBar/BottomBar";
import Products from "./Products/Products";
import "./Home.css";
import SellPage from "./SellPage/SellPage";
import {MyThemeContext} from "../../App"
import MyAlert from "../../Components/MyAlert/MyAlert";
import drexel_logo from "../../images/drexel-university-logo.png"
import penn_logo from "../../images/penn-uivaercity-logo.png"
import tample_logo from "../../images/tample-university-logo.png"

const Home = () => {

    const [myTheme, setMyTheme] = useContext(MyThemeContext);

    const tampleBg = "linear-gradient(#011F5B,#990000)";
    const drexelBg = "linear-gradient(#E0A414,#1A3478)";
    const pennBg = "linear-gradient(#9D2235,#9D2235)";



    useEffect(()=> {
       window.addEventListener("resize",verticalScroller)
       verticalScroller()
    })

    const verticalScroller = () => {
        const landingPageContainer = document.querySelector("#landing-page-container");
        if (window.screen.availWidth > 993) {
            window.addEventListener("wheel", (e) => {
                console.log("event runnitn", "and current screen is" + window.screen.availWidth);
                if (e.deltaY === 100) {
                    if(landingPageContainer){
                        landingPageContainer.scrollLeft += 100;
                    }
                }
                if (e.deltaY === -100) {
                    if(landingPageContainer){
                        landingPageContainer.scrollLeft += -100;
                    }
                }
            });
        }
    }
    

    return (
        <>
            <Navbar />
            <PageContainer id="landing-page-container">
                <PageSection id="home">
                    <div className="d-flex un-logo-part-container">
                        <div className="logo-part">
                            <div className="img">
                                <img src={tample_logo} alt="" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <Link to="/temple/all-products">
                                    <button onClick={() => setMyTheme({ background: tampleBg })}>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className="logo-part">
                            <div className="img">
                                <img src={drexel_logo} alt="" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <Link to="/drexel/all-products">
                                    <button onClick={() => setMyTheme({ background: drexelBg })}>Explore</button>
                                </Link>
                            </div>
                        </div>
                        <div className="logo-part">
                            <div className="img">
                                <img src={penn_logo} alt="" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <Link to="/penn/all-products">
                                    <button onClick={() => setMyTheme({ background: pennBg })}>Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </PageSection>
                <PageSection id="product" width="100vw">
                    <Products></Products>
                </PageSection>
                <PageSection id="sell-product" width="100vw">
                    <SellPage></SellPage>
                </PageSection>
                <PageSection id="about-us" width="100vw">
                    <AboutUs></AboutUs>
                </PageSection>
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default Home;
