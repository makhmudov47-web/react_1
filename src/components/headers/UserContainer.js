import React from 'react';
import "../../styles/HeaderStyles/userContainer.css"
import Avatar from "../../assets/logo/logo.png"

class  UserContainer extends React.Component{
  render() {
    return(
      <div className='userContainer'>
        <img src={Avatar} alt='logo'/>
        <p>кинотеатр</p>
        <ul>
          <li>Войти</li>
          <li>Регистрация</li>
        </ul>
       
      </div>
    )
  }
}

export default UserContainer;