import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

class AdComponent extends Component{
    render() {
        return(
            <div className = "AdComponent" style = {{ backgroundColor: '#00ACB2' }}>
                <Container className = "text-center">
                    <h1 style = {{ color: '#ffffff', paddingTop: '80px' }}>
                        Help us redefine emergency aid<br/> and healthcare, with RAH.
                    </h1>
                    <div style = {{ paddingTop: '20px',paddingBottom: '50px' }}>
                        <button className = "btn adBtn">
                            Become a RAHI
                        </button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default AdComponent;