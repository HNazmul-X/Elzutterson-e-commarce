import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { PageContainer, PageSection } from '../../Components/StyledComponents/StyledComponents';
import "../Profile/ProfilePage.css"
import "./ContactUs.css"




const ContactUs = () => {
    return (
        <>
            <div id="contact-us-page">
                <Navbar />
                <div className="title text-center">
                    <h1>Contact Us</h1>
                    <p>(Feedbacks, joining the team, chatting, questions and etc.)</p>
                </div>
                <PageContainer className="profile-page-container">
                    <PageSection className="form-site" width="50%">
                        <div className="two justify-content-around">
                            <input type="text" placeholder="First Name" className="form-control " />
                            <input type="text" placeholder="Last Name" className="form-control " />
                        </div>
                        <div className="three">
                            <input type="text" placeholder="Email" className="form-control" />
                            <input type="text" placeholder="Subject" className="form-control" />
                            <textarea name="" id="" cols="30" rows="6" placeholder="Details" className="form-control"></textarea>
                        </div>
                    </PageSection>
                    <PageSection className="right-site" width="50%">
                        
                        <div className="text">
                            <div className=" ">
                                If you rather want to write the mail directly through your own email, please feel free to contact: elzaterken@gmail.cmo
                            </div>
                        </div>
                    </PageSection>
                </PageContainer>
            </div>
        </>
    );
};

export default ContactUs;