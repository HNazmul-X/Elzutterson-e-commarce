import React, { useContext, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../Components/StyledComponents/StyledComponents';
import ProductsCard from '../AllProducts/ProductsCard';
import "../AllProducts/all-products.css"
import { useParams } from 'react-router';
import { MyThemeContext } from '../../App';

const MyList = () => {

        const [myTheme, setMyTheme] = useContext(MyThemeContext);
        const prodcut = [1, 2, 3, 4, 5, 6, 67, 6, 8, 4, 4, 5, 3];
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


    useEffect(() => {
        const allProductCardContainer = document.querySelector(".my-list.product-card-container");
        const productCard = allProductCardContainer.querySelectorAll(".product-card");
        const totalColumns = Math.ceil(productCard.length / 2);
        allProductCardContainer.style.gridTemplateColumns = `repeat(${totalColumns}, 180px)`;
        allProductCardContainer.style.width = `${totalColumns*200}px`

        // Dynamic width for  page control
        const myListPageContainer = document.querySelector(".my-list-page");
        console.log(allProductCardContainer.clientWidth)
        myListPageContainer.style.width = allProductCardContainer.clientWidth+"px"
    });

    return (
        <div>
            <div className="my-list-page">
                <Navbar />
                <div className="search-bar list-titel text-center ">
                    <h1>MY LIST</h1>
                </div>
                <PageContainer style={{width:"100%"}}>
                    <div className="my-list product-card-container justify-content-center mx-auto" width="100%">
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        
                    </div>
                </PageContainer>
            </div>
        </div>
    );
};

export default MyList;