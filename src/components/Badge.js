import React from 'react';

import './styles/Badge.css';
import confLogo from '../img/desertBackground.jpg';
import avatarLogo from '../img/Avatar.jpg';

class Badge extends React.Component {
    render(){
      return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Conference Logo"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarLogo} alt="Avatar"/>
          <h1>{this.props.userName} <br/> {this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.profession} </h3>
      <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
          #beberosconf
        </div>
      </div>);
    }
}

export default Badge;
