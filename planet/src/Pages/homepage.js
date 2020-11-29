import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LeftPlanet} from '../components/Leftplanet';

class Homepage extends Component {
    state = {  }
    render() { 
        return ( <div className="container">
          
        <div className="row">
          <div className="text-center"><h1 className="maintitle">EARF</h1>
        <LeftPlanet />
          </div>
        
          
        </div>
      </div> );
    }
}
 
export default Homepage;
