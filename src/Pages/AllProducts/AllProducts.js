import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { MyThemeContext } from '../../App';
import Navbar from '../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../Components/StyledComponents/StyledComponents';
import "./all-products.css"
import ProductsCard from './ProductsCard';

const AllProducts = () => {
    const [myTheme, setMyTheme] = useContext(MyThemeContext)
    const prodcut = ["drexel", "penn", "tample", "tample", "drexel", "tample", "drexel", "drexel", "penn", "tample"];
    const { schoolId } = useParams()
    const tampleBg = "linear-gradient(#011F5B,#990000)";
    const drexelBg = "linear-gradient(#E0A414,#1A3478)";
    const pennBg = "linear-gradient(#9D2235,#9D2235)";

    useEffect(()=> {
        if(schoolId === "drexel"){
            setMyTheme({
                background:drexelBg
            })
        }
        else if(schoolId === "penn"){
            setMyTheme({
                background:pennBg
            })
        }
        else if(schoolId === "tample"){
            setMyTheme({
                background:tampleBg
            })
        }
    },[setMyTheme, schoolId])
    useEffect(() => {
        const allProductCardContainer = document.querySelector(".product-card-container");
        const productCard = allProductCardContainer.querySelectorAll(".product-card");
        const totalColumns = Math.ceil(productCard.length / 2);
        console.log(totalColumns);
        allProductCardContainer.style.gridTemplateColumns = `repeat(${totalColumns}, 180px)`;



        const allProductPageContainer = document.querySelector(".all-products-page-container");
        const filterArea = document.querySelector("#filter-section")

        allProductPageContainer.style.width = totalColumns*200 + filterArea.clientWidth + "px";

    })
    return (
        <div className="all-products-page-container">
            <Navbar storeImage={schoolId} />
            <div className="search-bar text-center ">
                <input type="text" name="" id="" className="form-control w-75 m-auto" placeholder="Search Here" />
            </div>
            <PageContainer>
                <PageSection id="filter-section" width="300px">
                    <div className="filter-area">
                        <div className="filter-box">
                            <p>this is filter section</p>
                        </div>
                    </div>
                </PageSection>
                <PageSection className="product-card-container" width="75%">
                    {prodcut.map(item => <ProductsCard linkId={item} markLogo={item}></ProductsCard>)}
                </PageSection>
            </PageContainer>
        </div>
    );
};

export default AllProducts;