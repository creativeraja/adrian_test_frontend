import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import loader from './assets/loader.gif';
import UserService from './services/Userservice';
import './App.css';

export const UserComponent = () => {

  const dispatch = useDispatch();

  const usersInfo = useSelector((state) => state.usersData);

   useEffect(() => {
         // UserService.loadUsers(dispatch);
    }, [dispatch])
    const getData = () => {
        UserService.loadUsers(dispatch);
    }
      
  const errorContainer = () => {
    return <div>ERROR IN API</div>;
  }
  const showLoader = () => {
    return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;
  }

  const renderData = (usersInfo) => {
    return usersInfo.error ? errorContainer():

    <div className="container">
        {usersInfo.usersList && usersInfo.usersList.length === 0 ? <div>
            <button onClick={getData}>Click</button>
        </div>:<></>}

        <div>{usersInfo.loading }</div>
        {usersInfo && usersInfo.usersList.length>0 && <div className="header">
        <div>Id</div>
        <div>Ordinal</div>
        <div>Contact Id</div>
        <div>Info Type</div>
        <div>Phone</div>
        <div>Email</div>
        <div>Address</div>
        <div>City</div>
        <div>State</div>
        <div>Zip</div>
        <div>Country</div>
      </div>}

    {usersInfo && usersInfo.usersList.map((user, index) =>
        <div className="row" key={index}>
        <div> { user.id } </div>
        <div> { user.ordinal } </div>
        <div> { user.contact_id } </div>
        <div> { user.info_type } </div>
        <div> { user.phone } </div>
        <div> { user.email } </div>
        <div> { user.address } </div>
        <div> { user.city } </div>
        <div> { user.state } </div>
        <div> { user.zip } </div>
        <div> { user.country } </div>
        </div>
  )}
  </div>
  }

  return (    
    usersInfo.loading ? showLoader() : renderData(usersInfo)
  )
}

export default UserComponent;
