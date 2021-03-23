import React from 'react';
import "./BottomBar.css"

const BottomBar = () => {
    return (
        <>
            <div className="bottom-bar">
                <div className="row">
                    <div className="col-8 left">
                        <ul>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Contact us
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Facebook
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Instagram
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 right">
                        <ul>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Privacy
                                </a>
                            </li>
                            <li className="btm-bar-item">
                                <a className="btm-bar-link" href="">
                                    Terms
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