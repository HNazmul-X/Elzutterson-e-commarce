import React from 'react';
import "./AllProducts.css"
import { Link } from 'react-router-dom';
import { PageContainer, PageSection } from '../../../Components/StyledComponents/StyledComponents';

const Products = () => {
    return (
        <div id="all-product-page">
            <PageContainer id="product-container">
                <PageSection className="shop-catagory-shop-all" width="100vw">
                    <div className="section_1">
                        <div className="desc">
                            <h1>
                                Apparel? Check. <br /> IT Services? Check. <br /> Textbooks? Check. <br /> Others? Check.
                            </h1>
                            <Link to="/all-catagory">
                                <button>Shop Catagories</button>
                            </Link>
                        </div>
                    </div>

                    <div className="section_2">
                        <div className="desc">
                            <h1>Something for you. <br/> Something for them.</h1>
                            <h1 style={{marginTop:"10px"}}> Check out all the products</h1>
                            <Link to="/drexel/all-products">
                                <button>Shop All</button>
                            </Link>
                        </div>
                    </div>
                    
                </PageSection>
            </PageContainer>
        </div>
    );
};

export default Products;