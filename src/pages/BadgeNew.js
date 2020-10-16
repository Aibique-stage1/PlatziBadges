import React from 'react';

import './styles/BadgeNew.css'
import header from '../img/logo.png'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="con">
          <div className="row">
            <div className="col-6">
              <Badge 
              userName="Tonio"
              lastName="Jimenez"
              twitter="TonioJimenez"
              profession="Web master developer"
              />
            </div>
            <div className="col-6">
              <BadgeForm 
              userName="Tonio"
              lastName="Jimenez"
              twitter="TonioJimenez"
              profession="Web master developer"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BadgeNew;