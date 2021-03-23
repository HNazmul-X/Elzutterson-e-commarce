import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../../Components/StyledComponents/StyledComponents';
import "../SignUpForm/SignUpForm.css"
import logo from "../../../images/avaina-square.png"

const Confirm = () => {
    return (
        <>
            <div id="confirm-form-page">
                <Navbar></Navbar>
                <PageContainer>
                    <PageSection width="100vw">
                        <div className="form-area">
                            <p className="small text-center text-light mb-2">Complete your sign up</p>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>

                            <form action="">
                                <div className="">
                                    <input className="form-control mb-4" type="text" placeholder="Type confirmation code" />
                                    <div className="text-center">
                                        <Link>
                                            <button className="btn mb-2 login">Login</button>
                                        </Link>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </PageSection>
                </PageContainer>
            </div>
        </>
    );
};

export default Confirm;