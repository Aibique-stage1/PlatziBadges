import React from 'react';
//React brings the hooks
import {Link} from 'react-router-dom';

// import Modal from '../components/Modal';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import Badge from '../components/Badge';

import './styles/BadgeDetails.css';
import logo from '../img/logo.png';

function useIncreaseCount(max){
  const [count,setCount] = React.useState(0);

  if(count > max){
    setCount(0);
  }

  return [count,setCount];
}

function BadgeDetails (props){
  const [count,setCount] = useIncreaseCount(4);
  //This constant takes two results [state, setState]
  const badge = props.badge;
  // const count =3;

  return(
    <div>
    <div className="BadgeDetails_hero">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={logo} alt="Logo Conference"/>
          </div>
          <div className="col-6 .BadgeDetails__hero-attendant-name ">
            <h1>{badge.firstName}{badge.lastName}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <Badge 
          firstName={badge.firstName}
          lastName={badge.lasName}
          twitter={badge.twitter}
          jobTitle={badge.jobTitle}
          email={badge.email}
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
          <div>
            <div>
              <button onClick={() =>{
                setCount(count + 1);
              }} className="btn btn-primary mr-4">
                Increase Count: {count}
              </button>

              <Link 
              to={`/badges/${badge.id}/edit`}
              className="btn btn-primary mb-4">
              Edit
              </Link>
            </div>

            <div>
              <button 
              onClick={props.onOpenModal}
              className="btn btn-danger">
              Delete
              </button>
              <DeleteBadgeModal 
              onDeleteBadge={props.onDeleteBadge}
              onClose={props.onCloseModal}
              isOpen={props.modalIsOpen}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
//We used portals to acces the App externally and add information without breaking the flow.
export default BadgeDetails;