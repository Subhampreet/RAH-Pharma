import React, { Component } from 'react';


function Table() {
    return (
        <div className="table">
            <div className="head">
              <div className="left">
                Emergency services
              </div>
              <div className="right"></div>
            </div>

            <table>
              <thead>
                <tr>
                  <th className="th-pad"></th>
                  <th>Organization name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Distance radius</th>
                  <th>Ambulance number</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>AIIMS Bhubaneswar</td>
                  <td>Government</td>
                  <td>Basic</td>
                  <td>2 km </td>
                  <td>+91 565645515616</td>
                </tr>
                <tr>
                  <td></td>
                  <td>SCB Medical</td>
                  <td>Government</td>
                  <td>Advance</td>
                  <td>5 km</td>
                  <td>+91 565645515616</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Kalinga Hospital</td>
                  <td>Private</td>
                  <td>Mortuary</td>
                  <td>10 Km</td>
                  <td>+91 565645515616</td>
                </tr>
                <tr>
                  <td></td>
                  <td>AMRI Hospital</td>
                  <td>Private</td>
                  <td>Mortuary</td>
                  <td>10 Km</td>
                  <td>+91 565645515616</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Apollo Medicals</td>
                  <td>Private</td>
                  <td>Mortuary</td>
                  <td>10 Km</td>
                  <td>+91 565645515616</td>
                </tr>
              </tbody>      
            </table>
        </div>
    )
}




export default Table;