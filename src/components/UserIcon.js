import React,{Component} from 'react'
import AppLogo from '../static/app-logo.svg'

class UserIcon extends Component {

    render() {
        return (
            <img className='user-icon' src={AppLogo}/>
        )
    }

}

export default UserIcon