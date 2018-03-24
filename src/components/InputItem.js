import React,{Component} from 'react'
import TextInput from './TextInput'
import '../components-css/InputItem.css'

class InputItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let inputNote = null
        ////{this.props.inputNote && (<p className='input-note'>{this.props.inputNote}</p>)}
        if(this.props.inputNote) {
            inputNote = (<p className='input-note'>{this.props.inputNote}</p>)
        }

        let otherLink = null
        if(this.props.otherLink) {
            otherLink = (<a className='input-item-otherlink' href={this.props.otherLinkURL}>{this.props.otherLink}</a>)
        }
        return (
            <dl className={'input-item'}>
                <dt className='input-item-label'>
                    <label htmlFor={this.props.id} className='input-label'>{this.props.labelValue}</label>
                    {otherLink}
                </dt>
                <dl className='input-item-real'>
                    <TextInput id={this.props.id} onBlur={this.props.onBlur} placeHolder={this.props.placeHolder}/>
                </dl>
                {inputNote}
            </dl>
        )
    }

}

export default InputItem