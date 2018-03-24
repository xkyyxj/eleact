import React from 'react'
import '../components-css/TextInput.css'

class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputContent: '',
            type: props.type
        }
    }

    inputBlur(event) {
        console.log(event)
        console.log(event.target.value)
        this.props.inputBlur(event.target.value)
    }

    render() {
        return (
            <input id={this.props.id} className={'text-input'} type={this.state.type} onBlur={this.props.onBlur} placeholder={this.props.placeHolder}/>
        )
    }
}

export default TextInput