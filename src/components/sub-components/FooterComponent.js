import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

// import css!
import '../../assets/css/footer.css';

// React icons!
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

class FooterComponent extends Component{
    render() {
        return(
            
            <footer style = {{ backgroundColor: '#16292A' }}>
                <Container className = "text-center text-md-start">
                    <div className = "row">
                        <div className = "col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style = {{ paddingTop: '80px', paddingBottom: '60px' }}>
                            <p className = "text-center" style = {{ color: '#D9DBE1', fontFamily: 'Inter' }}>
                                Copyright © 2020 Landify UI Kit.<br/>
                                All rights reserved
                            </p>
                            <div className = "social-media text-center">
                                <RiFacebookCircleLine style = {{ color: '#ffffff', fontSize: '2em' }}/>
                                <RiInstagramLine style = {{ color: '#ffffff', fontSize: '2em' }}/>
                                <RiTwitterLine style = {{ color: '#ffffff', fontSize: '2em' }}/>
                                <RiYoutubeLine style = {{ color: '#ffffff', fontSize: '2em' }}/>
                            </div>
                        </div>
                        <div className = "col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 style = {{ color: '#ffffff' }}>
                                Company
                            </h6>
                            <p className = "footer-link">
                                <a>
                                    About us
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Blog
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Contact us
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Pricing
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Testimonials
                                </a>
                            </p>
                        </div>
                        <div className = "col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-4">
                            <h6 style = {{ color: '#ffffff' }}>
                                Support
                            </h6>
                            <p className = "footer-link">
                                <a>
                                    Help center
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Terms of Service
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Legal
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Privacy Policy
                                </a>
                            </p>
                            <p className = "footer-link">
                                <a>
                                    Status
                                </a>
                            </p>
                        </div>
                        <div className = "col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 style = {{ color: '#ffffff' }}>
                                Stay up to date
                            </h6>
                            
                            <form>
                                <div className = "subscribe">
                                    <input className = "form-control sub-form" placeholder = "Your email address"/>
                                    <i className = "bi bi-cursor" style = {{ color: '#ffffff',fontSize: '2em' }}></i>            
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </footer>

        );
    }
}

export default FooterComponent;