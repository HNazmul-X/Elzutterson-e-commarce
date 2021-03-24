import React from 'react';
import { Link } from 'react-router-dom';
import "./BottomBar.css"

const BottomBar = () => {
    return (
        <>
            <div className="bottom-bar">
                <div className="row">
                    <div className="col-8 left">
                        <ul>
                            <li className="btm-bar-item">
                                <Link to="/contact-us" className="btm-bar-link" href="">
                                    <span id="text">Contact us</span>
                                    <span id="icon">
                                        {" "}
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    <span id="text"> Facebook</span>
                                    <span id="icon">
                                        {" "}
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    <span id="text">Instagram</span>
                                    <span id="icon">
                                        {" "}
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    <span id="text">Twitter</span>
                                    <span id="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 right">
                        <ul>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    <span id="text">Privacy</span>
                                    <span id="icon">
                                        <i class="fas fa-user-lock"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    <span id="text"> Terms</span>
                                    <span id="icon">
                                        <i class="fas fa-list"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomBar;