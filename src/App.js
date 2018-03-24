import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import TitleBar from './components/TitleBar'
import {HashRouter,Route} from 'react-keeper'
import MainPage from './MainPage'
const {ipcRenderer} = window.require('electron')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: '-1'
    }
  }

  loginCallback(userId) {
    if(userId != -1) {
      ipcRenderer.send('login-successful')
    }
    this.setState((oldState) => ({
      userId: userId
    }))
  }

  render() {
    let realDisplayComponent = this.state.userId === '-1' ? (<LoginForm notifyLogin={this.loginCallback.bind(this)}/>) : (<MainPage/>)
    return (
      <div className="App" >
        <TitleBar/>
        {realDisplayComponent}
      </div>
    );
  }
}

export default App;
