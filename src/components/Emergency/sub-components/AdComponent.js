import React, { Component } from 'react';
import Container from '@material-ui/core/Container';


function AdComponent() {
    return (
        <div className="AdComponent">
            <div className="body">
                <h1>Help us redefine emergency aid <br /> and healthcare, with RAH.</h1>
                <button>Contact Emergency</button>
            </div>
        </div>
    )
}

// class AdComponent extends Component{
//     render() {
//         return(
//             <div className = "AdComponent" style = {{ backgroundColor: '#803D3D' }}>
//                 <Container className = "text-center">
//                     <h1 style = {{ color: '#ffffff', paddingTop: '80px' }}>
//                         Help us redefine emergency aid<br/> and healthcare, with RAH.
//                     </h1>
//                     <div style = {{ paddingTop: '20px',paddingBottom: '50px' }}>
//                         <button className = "btn adBtn">
//                             Contact Emergency
//                         </button>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }
// }


export default AdComponent;