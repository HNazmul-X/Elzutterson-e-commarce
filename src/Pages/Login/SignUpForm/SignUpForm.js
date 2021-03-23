import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../../Components/StyledComponents/StyledComponents';
import "./SignUpForm.css"
import logo from '../../../images/avaina-square.png'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div id="sign-up-page">
            <PageContainer>
                <Navbar />
                <PageSection width="100vw">
                    <div className="form-area">
                        <p className="small text-center text-light mb-2">Complete your sign up</p>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>

                        <form action="">
                            <div className="name-input">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <div className="">
                                <input className="form-control mb-4" type="email" placeholder="Email" />
                                <input className="form-control mb-4" type="password" placeholder="Password" />
                                <input className="form-control mb-4" type="re-password" placeholder="Confirm password" />
                                <div className="text-center">
                                    <button type="submit " className="btn sign-up w-75 mb-2">
                                        Complete Sign up
                                    </button>
                                    <br />
                                    <Link to="login">
                                        <button className="btn  login">Login</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </PageSection>
            </PageContainer>
        </div>
    );
};

export default SignUpForm;