import React,{Component} from 'react'
import UserIcon from './UserIcon'

const {http} = windonw.require('http')

class MainPageLeftTree extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topItems: ['item1','item2','item3','item4','item5']
        }
    }

    componentWillMount() {

        let sendData = {
            userId: this.props.userId
        }

        let queryOption = {
            hostname: '127.0.0.1',
            port: 8080,
            path: '/queryTypeInfo',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        }

        let requestHandler = http.request(queryOption,(resp) => {
            resp.on('data', data => {

            })
            resp.on('end', () => {

            })
        })

        requestHandler.write(sendData)
        requestHandler.end()
    }

    render() {

        let itemsArray = []
        this.state.topItems.forEach(x => {
            itemsArray.push(<li className='type-item'>{x}</li>)
        })

        return (
            <div>
                <UserIcon/>
                <div>
                    <ul>
                        {itemsArray}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MainPageLeftTree