import React,{Component} from 'react'
import http from 'http'

class MainPage extends Component {

    constructor(props) {
        super(props)
        let typeContent = getUserTypeContent(this.props.userId)
        this.state = {
            userId = props.userId,
            typeContent = typeContent,
            mainContent = []
        }
    }

    getUserTypeContent(userId) {
        let typeContent = []

        let transformData = {
            userId: userId
        }
        let requestHandler = http.request({
            hostname: '127.0.0.1',
            port: 8080,
            path: '/getTypeContentByUserId',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-length': Buffer.byteLength(transformData)
            }
        },resp => {

        })

        requestHandler.on('error', e => {

        })

        requestHandler.write(JSON.stringify(transformData))
        requestHandler.end()
    }

    render() {
        let typeContent = []
        for(let i = 0;i < this.typeContent.length;i++) {
            typeContent.push(<div>{this.typeContent[i]}</div>)
        }
        return (
            <div className='main-page'>
                <div className='type-content'>
                    {typeContent}
                </div>
                <div className='main-content'>
                </div>
            </div>
        )
    }

}