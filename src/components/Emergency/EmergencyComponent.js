import React, { Component } from 'react';
import Nav from './sub-components/NavView';
import "./styles.css";
import AdComponent from './sub-components/AdComponent';
import MapBox from './sub-components/MapBox';
import Table from './sub-components/Table';
import SearchBar from './sub-components/SearchBar';
import Footer from './sub-components/Footer';



class EmergencyComponent extends Component{
    render() {
        return(
            <>
                <Nav/>
                <SearchBar/>
                <MapBox/>
                {/* <Table/> */}
                <AdComponent/>
                <Footer />
            </>
        );
    }
}

export default EmergencyComponent;