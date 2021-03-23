import React from "react";
import "./MyAlert.css"









/**
 * 
 * @param { :isShow: for showing alert or hide} param0 
 * @param { :theme, aletText}
 * @returns 
 */

const MyAlert = ({isShow, children,theme, alertText}) => {


    
    return (
        <>
            <div className={isShow ? "alert-cover-area" : "d-none"}>
                <div style={{ background: theme }} className="alert-box">
                    <h5 className="alert-text">{alertText}</h5>
                    <div className="buttons ">{children}</div>
                </div>
            </div>
        </>
    );
};

export default MyAlert;
