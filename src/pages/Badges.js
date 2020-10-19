import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../img/logo.png'
import './styles/Badges.css';
// import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';

import api from '../api';

class Badges extends React.Component{
  //It is important to assign a key to each badge to avoid repetitions
  constructor(props){
    super(props);
    // console.log('1. constructor()');
      this.state = {
        loading:true,
        error:null,
        data:undefined
      };
  }

  //This method will work as a break point for our Api request
  componentDidMount(){
    // console.log('3. componentDidMount()');
    this.fetchData();

    //watcher every 5 seconds
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  fetchData = async () => {
    //We call the framework
    this.setState({loading:true,error:null});
    try{
      const data = await api.badges.list();
      this.setState({loading:false,data:data});
      return data;
    }catch(error){
      // console.log('There was an error fetching data')
      this.setState({loading:false,error:error});
    }
  }
  //When it is Mount we set an AsyncFunction so the next method update is triggered to render again
  // componentDidUpdate(prevProps, prevState){
  //   // console.log('5. componentDidUpdate()');
  //   // console.log({
  //   //   prevProps: prevProps,
  //   //   prevState: prevState,
  //   // });

  //   // console.log({
  //   //   props: this.props,
  //   //   state: this.state,
  //   // });
  // }
  //Before the Unmount
  // componentWillUnmount(){
  //   // console.log('6. componentWillUnmount');
  //   clearTimeout(this.timeoutId)
  // }
  render(){
    // console.log('2. render()');
    if(this.state.loading === true && !this.state.data){
    // console.log('4. render()');
      return <PageLoading/>;
    }
    if(this.state.error){
      return <PageError error={this.state.error}/>;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={logo} alt="Conference logo" className="Badges_conf-logo"/>
            </div>
          </div>
        </div>
      <div className="Badge__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badges
          </Link>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}/>

          </div>
        </div>
            {this.state.loading === true && <MiniLoader/>}
      </div>
      </React.Fragment>
    )
  }
}

export default Badges;