import React,{Component} from 'react'
import '../components-css/TitleBar.css'
//import {ipcRender} from 'electron'
const os = window.require('os')
//import os from 'os'

const {ipcRenderer} = window.require('electron')

class TitleBar extends Component {

    value1 = `alksdjflkasjdflaksdjflksadjfkl`

    constructor(props) {
        super(props)
        this.state = {
            maxmize: false
        }
        console.log(os)
        console.log(os.cpus())
    }

    buttonClick(actionName) {
        if(actionName === 'minimize') {
            ipcRenderer.send('minimize')
        }
        else {
            ipcRenderer.send('close')
        }
    }

    render() {
        return (
            <div className='title-bar'>
                <div className='title-bar-content'>
                    <button className='minimize-button' onClick={this.buttonClick.bind(this, 'minimize')}>
                        <svg width="10" height="10">
                            <path d="M0 4 L10 4 L10 6 L0 6 Z"/>
                        </svg>
                    </button>
                    <button className='close-button' onClick={this.buttonClick.bind(this, 'close')}>
                        <svg width="10" height="10">
                            <path d="M 0 0 L 0 0.7 L 4.3 5 L 0 9.3 L 0 10 L 0.7 10 L 5 5.7 L 9.3 10 L 10 10 L 10 9.3 L 5.7 5 L 10 0.7 L 10 0 L 9.3 0 L 5 4.3 L 0.7 0 Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

}

export default TitleBar