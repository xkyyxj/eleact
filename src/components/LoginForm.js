import React from 'react'
import InputItem from './InputItem'
import {ButtonItem} from './ButtonItem'
import '../components-css/LoginForm.css'
import http from 'http'
import Logo from '../static/app-logo.svg'
const ipcRenderer = window.require('electron')
//const http = window.require('http')

class LoginForm extends React.Component {

    testThis() {
        console.log('Login form class this')
        console.log(this)
    }

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            userId: ''
        }
        // /window.setInterval(this.testThis,1000)
    }

    inputBlur(inputType, event) {
        this.setState({
            [inputType] : event.target.value
        })
    }

    doLogin() {
        let data = {
            name: this.state.userName,
            password: this.state.password,
            id: this.state.userId,
            salt: ''
        }
        console.log('In login action!')
        console.log(http)
        let options = {
            hostname: '127.0.0.1',
            port: 8080,
            path: '/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        }

        let requestHandler = http.request(options,(resp) => {
            resp.setEncoding('utf-8')
            resp.on('data', (data) => {
                console.log(data)
                if(this.props.notifyLogin instanceof Function) {
                    this.props.notifyLogin(data.returnObj.id)
                }
            })
            resp.on('end', () => {
                
            })
        })

        requestHandler.on('error',(e) => {
            
        })

        requestHandler.write(JSON.stringify(data))
        requestHandler.end()
    }

    render() {
        return (
            <div className='login-form'>
                <img className='app-logo' src={Logo}/>
                <InputItem labelValue='User Name:' id='userName' otherLink='New User?' onBlur={this.inputBlur.bind(this,'userName')}/>
                <InputItem labelValue='Password:' id='password' otherLink='forget password?' onBlur={this.inputBlur.bind(this,'password')}/>
                <ButtonItem buttonName='Log in' onClick={this.doLogin.bind(this)}/>
            </div>
        )
    }

}

export default LoginForm