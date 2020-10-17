import React from 'react';

import './styles/BadgeNew.css'
import header from '../img/logo.png'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };
  //We initialize an state here to save it from Form

  handleChange = e => {
    // const nextStateForm = this.state.form
    // nextStateForm[e.target.name] = e.target.value; --> first option to keep the object state and not to ove write
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render(){
    //Now we want to update the information from the inputs into the Badge section
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
              userName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
              profession={this.state.form.jobTitle}
              />
            </div>
            <div className="col-6">
              <BadgeForm  onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BadgeNew;