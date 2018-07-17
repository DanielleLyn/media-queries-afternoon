import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state={
        showMenu: false,
        tellMeMore: false,
      }
    }
    
    render() {
    const{showMenu} = this.state;
    const{tellMeMore} = this.state.tellMeMore;
    return (
      <div className="App">
      <nav>
         <div className="start small"> Start Bootstrap </div>
         <div className="menu small"> </div>
      <div className ="navBig">
      <div className="menuItem">SERVICES</div>
      <div className="menuItem">PORTFOLIO</div>
      <div className="menuItem">ABOUT</div>
      <div className="menuItem">TEAM</div>
     <div className="menuItem">CONTACT</div>
       </div>
         </nav>
         <button className="hamburger" onClick={()=>this.setState({showMenu: !showMenu})}>Menu</button>
      <div className = {showMenu ? "drawer" : "drawer open"}>
      <div className="menuItem">SERVICES</div>
      <div className="menuItem">PORTFOLIO</div>
      <div className="menuItem">ABOUT</div>
      <div className="menuItem">TEAM</div>
     <div className="menuItem">CONTACT</div>
       </div>
      <div className = "Header">


       <div className = "introdiv">
        <div className = "welcome small">Welcome To Our Studio!</div>
        <div className="greeting small">IT'S NICE TO MEET YOU</div>
        <button className="button2" onClick = {() => this.setState({tellMeMore: !tellMeMore})}> Tell Me More </button>
       
        {/* <div className="start big"> Start Bootstrap </div>
         <div className="menu big"> </div>
        <button onClick={()=>this.setState({showMenu: !showMenu})}>Menu</button> */}

        {/* <div className="start small"> Start Bootstrap </div>
         <div className="menu small"> </div>
        <button onClick={()=>this.setState({showMenu: !showMenu})}>Menu</button> */}        
         </div>
      
        {/* <div className = "welcome big">Welcome To Our Studio!</div>
        <div className="greeting big">IT'S NICE TO MEET YOU</div>
      <button onClick = {() => this.setState({tellMeMore: !tellMeMore})}> Tell Me More </button> */}

        {/* <div className = "welcome biggest">Welcome To Our Studio!</div>
        <div className="greeting biggest">IT'S NICE TO MEET YOU</div>
      <button onClick = {() => this.setState({tellMeMore: !tellMeMore})}> Tell Me More </button> */}
       </div>
       

       <div className = "footer">
         <div className="services">SERVICES</div>
         <div className="lorem">lorem impsum dolor sit </div>
         <div>shopping cart</div>
         </div>

         </div>
         
    );
  }
}

export default App;
