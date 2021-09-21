import React, { Component } from 'react';
import BestRatedComponent from './sub-components/Best-rated-component';
import HospitalNear from './sub-components/HospitalNear';
import Nav from './sub-components/tempNav';
import Testimonials from './sub-components/testimonials';
import TempLanding from './sub-components/TempLanding';
import Department from './sub-components/Department';
import BlogComponent from './sub-components/blogComponent';
import AdComponent from './sub-components/AdComponent';
import FooterComponent from './sub-components/FooterComponent';
import BroadRange from './sub-components/BroadRange';

class HomeComponent extends Component{
    render() {
        return(
            <>
                <Nav/>                
                <TempLanding/>
                <Department/>
                <HospitalNear/>
                <BroadRange/>
                <Testimonials/>
                <BlogComponent/>
                <AdComponent/>
                <FooterComponent/>
            </>
        )
    }
}

export default HomeComponent;