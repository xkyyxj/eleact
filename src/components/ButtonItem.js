import React,{Component} from 'react'
import '../components-css/ButtonItem.css'

class ButtonItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className='button-item' type='button' onClick={this.props.onClick}>{this.props.buttonName}</button>
        )
    }

}

export {ButtonItem}