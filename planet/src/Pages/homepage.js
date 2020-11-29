import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LeftPlanet} from '../components/Leftplanet';
import {MiddlePlanet} from '../components/middleplanet';
import {RightPlanet} from '../components/rightplanet'
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";

class Homepage extends Component {
    state = {  }
    render() { 
        return ( <div className="container">
          
        <div className="row">
          <div className="col-sm "><h1 className="maintitle">EARF</h1>
        <LeftPlanet />
          </div>
         <div className="col-sm "><h1 className="maintitle">Pandora</h1>
           <MiddlePlanet />
          </div>
          <div className="col-sm "><h1 className="maintitle">Mars</h1>
          <RightPlanet />
          </div>
        </div>
      </div> );
    }
}
 
export default Homepage;
