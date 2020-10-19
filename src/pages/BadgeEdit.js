import React from 'react';

import './styles/BadgeEdit.css'
import header from '../img/logo.png'
// import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends React.Component{
  state = {
    loading: true,
    error:null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl:'',
    },
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({loading:true, error:null});

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({loading:false, form:data});
    }catch(error){
      this.setState({loading:false, error:error});
    }
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

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading:true,error:null});

    try{
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading:false});

      this.props.history.push('/badges')

    }catch(error){
      this.setState({loading:false,error:error})
    }
  }
  render(){
    if(this.state.loading){
      return <PageLoading/>;
    }
    //Now we want to update the information from the inputs into the Badge section
    return(
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="con">
          <div className="row">
            <div className="col-6">
              <Badge 
              userName={this.state.form.firstName || 'FIRST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'}
              twitter={this.state.form.twitter || 'TWITTER'}
              email={this.state.form.email || 'EMAIL_ADRESS'}
              profession={this.state.form.jobTitle || 'JOB_TITLE'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm  
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} 
              formValues={this.state.form}
              error={this.state.error}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default BadgeEdit;