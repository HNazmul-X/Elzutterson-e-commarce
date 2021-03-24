import React, { useContext, useEffect } from "react";
import BottomBar from "../../Components/BottomBar/BottomBar";
import Navbar from "../../Components/Navbar/Navbar";
import { PageContainer, PageSection } from "../../Components/StyledComponents/StyledComponents";
import "./ProfilePage.css";
import avain_square from "../../images/avaina-square.png";
import avaing_pay from "../../images/avaina-pay.png";
import { MyThemeContext } from "../../App";
import { useParams } from "react-router";

const ProfileEdit = () => {

    const [myTheme, setMyTheme] = useContext(MyThemeContext);
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
         } else if (schoolId === "temple") {
             setMyTheme({
                 background: tampleBg,
             });
         }
     }, [setMyTheme, schoolId]);
    return (
        <>
            <Navbar storeImage={schoolId} />
            <PageContainer className="profile-page-container">
                <PageSection className="form-site" width="50%">
                    <div className="logo">
                        <img src={avain_square} alt="" />
                        <button>Change icon</button>
                    </div>
                    <div className="two">
                        <input type="text" placeholder="First Name" className="form-control " />
                        <input type="text" placeholder="Last Name" className="form-control " />
                    </div>
                    <div className="three">
                        <input type="text" placeholder="School email.(edu)" className="form-control" />
                        <input type="text" placeholder="School [optional]" className="form-control" />
                    </div>
                    <div className="text-end">
                        <button className="btn mx-2 discrad  px-5">Cancel</button>
                        <button className="btn mx-2 confirm px-5">Confirm</button>
                    </div>
                </PageSection>
                <PageSection className="right-site" width="50%">
                    <div className="logo">
                        <img src={avaing_pay} alt="" />
                    </div>
                    <div className="text">
                        <h1>Coming Soon</h1>
                    </div>
                </PageSection>
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default ProfileEdit;
