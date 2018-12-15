import React from 'react'
import logo from '../logo.svg';

const Header = props=>{
    return(
 <header className="header">
<img src={logo} className="App-logo" alt="logo" />
<h2 className="App-title">Do Zero ao Chatbot React</h2>

</header>
    )
}
export default Header