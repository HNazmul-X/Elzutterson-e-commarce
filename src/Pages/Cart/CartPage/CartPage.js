import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { MyThemeContext } from '../../../App';
import BottomBar from '../../../Components/BottomBar/BottomBar';
import Navbar from '../../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../../Components/StyledComponents/StyledComponents';
import CartItem from '../CartItem/CartItem';
import "./CartPage.css"


const CartPage = () => {

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
        <div id="cart-page">
            <Navbar />
            <PageContainer>
                <PageSection id="cart-section" width="50%">
                    <h3 className="p-4 text-light">Your Cart</h3>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </PageSection>
                <PageSection id="carousel_form" width="50%">
                    <div className="carousel-here"></div>

                    <div className="name-of-product">
                        <h5>name of product</h5>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="name-of-product">
                        <div className="">
                            Chatting-width <span className="head">name of Buyer</span>
                        </div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </PageSection>
            </PageContainer>
            <BottomBar/>
        </div>
    );
};

export default CartPage;