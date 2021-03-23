import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBanner from '../../../Components/PrimaryBanner/PrimaryBanner';
import "./aboutUs.css"

const AboutUs = () => {
    return (
        <div id="about-us-page">
            <PrimaryBanner background="https://i.ibb.co/xq2w552/image-9.png">
                <h1>
                    Have any bugs/issues? <br /> Want to join the team? <br /> Contact Us!
                </h1>
                <Link to="/contact-us">
                    <button className="theme-button mt-4">Contact us</button>
                </Link>
            </PrimaryBanner>
        </div>
    );
};

export default AboutUs;