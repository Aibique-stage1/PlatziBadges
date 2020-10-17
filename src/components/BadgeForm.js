import React from 'react';

class BadgeForm extends React.Component{
  //We initialize the State with an empty object
  //With this method we control the sate and when submit
  //the form will submit the object state.
  // state = {};
  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value
  //   // });
  //   this.setState({
  //     //this object will save the information writen in the input
  //     //this way we are saving data in two places "setState" and the property
  //     //Propertly we have to read the state of each input
  //     [e.target.name]: e.target.value,
  //   })
  // }
  handleClick = (e) => {
    console.log('Button was clicked');
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form was submitted')
  }
  render(){
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label >Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
          </div>
          <div className="form-group">
            <label >Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
          </div>
          <div className="form-group">
            <label >Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;