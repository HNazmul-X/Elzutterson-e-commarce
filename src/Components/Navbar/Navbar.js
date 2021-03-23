import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import { HashLink } from "react-router-hash-link";
import drexel_img from "../../images/drexel-university-logo.png"
import penn_img from "../../images/penn-uivaercity-logo.png"
import tample_img from "../../images/tample-university-logo.png"

const Navbar = ({storeImage}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand start-item">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler fas fa-bars text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav middle-item">
                            <li className={storeImage?"nav-item":"d-none"}>
                                <HashLink className="nav-link" to="/#home">
                                   {storeImage? <img className="img-fluid store-img-logo" src={storeImage === "drexel"? drexel_img : storeImage === "penn"? penn_img : storeImage === "tample" ? tample_img : "" } alt="store Img" /> : ""}
                                </HashLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink className="nav-link" to="/#home">
                                    Home
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#product">
                                    Browse
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#sell-product">
                                    Sell
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/#about-us">
                                    About us
                                </HashLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav end-item">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-shopping-cart me-2"></i>Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
