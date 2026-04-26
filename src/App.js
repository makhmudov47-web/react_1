import React from 'react';
import './App.css';
import Header from './components/headers/Header';
import MainPage from './pages/MainPage';
import Footer from './components/footers/Footer';

class  App extends React.Component{
  render() {
    return(
      <div className='app'>
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    )
  }
}

export default App;
