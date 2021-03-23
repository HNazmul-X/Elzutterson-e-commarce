import React from 'react';
import { PageContainer, PageSection } from '../../../Components/StyledComponents/StyledComponents';
import Navbar from "../../../Components/Navbar/Navbar"
import logo from "../../../images/avaina-square.png"; 
import "../SignUpForm/SignUpForm.css"
import { Link } from 'react-router-dom';

const LoginFrom = () => {
    return (
        <>
            <div className="" id="login-page">
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
                                    <input className="form-control mb-4" type="email" placeholder="Email" />
                                    <input className="form-control mb-4" type="password" placeholder="Password" />
                                    <div className="text-center">
                                        <Link>
                                            <button className="btn mb-2 login">Login</button>
                                        </Link>{" "}
                                        <br />
                                        <Link to="/register">
                                            <button type="submit " className="btn w-50 sign-up">
                                                Sign up
                                            </button>
                                        </Link>
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

export default LoginFrom;