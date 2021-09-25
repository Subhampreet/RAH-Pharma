import React, { Component } from 'react';


function Footer() {
    return (
        <div className="footer">
            <div className="body">
                <div className="left">
                    <h3>Copyright © 2020 Landify UI Kit. <br />All rights reserved</h3>
                    <div className="social"></div>
                </div>
                <div className="right">
                    <div className="col-1">
                        <h2>Company</h2>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>

                    <div className="col-1">
                        <h2>Support</h2>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>

                    <div className="col-3 col-1">
                        <h2>Stay up to date</h2>
                        <div className="email">
                            <input className = "form-control sub-form" placeholder = "Your email address"/>
                            <i className = "bi bi-cursor" style = {{ color: '#ffffff',fontSize: '1.3em' }}></i>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Footer;