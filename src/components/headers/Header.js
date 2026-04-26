import React from 'react';
import "../../styles/HeaderStyles/header.css"
import Logo from './Logo';
import Menu from './Menu';
import UserContainer from './UserContainer';

class  Header extends React.Component{
  render() {
    return(
      <div className='header'>
        <Logo/>
        <Menu/>
        <UserContainer/>
      </div>
    )
  }
}

export default Header;
