import React from 'react';
import "../../styles/HeaderStyles/menu.css"
import NavItems from './NavItems';

class  Menu extends React.Component{
  render() {
    return(
      <div className='menu'>
        <NavItems main="Главна"/>
        <NavItems info="Избранное"/>
        <NavItems about="О Контакты"/>
        <NavItems about="О сайте"/>

        
        
        
       
      </div>
    )
  }
}

export default Menu;