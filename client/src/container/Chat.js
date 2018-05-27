import React, { Component } from 'react'
import { Input, Button } from 'react-materialize'
import './Chat.css'

class Chat extends Component{
	render(){
		return(
			<div className='chat'>
				<Input type='textarea' />
				<Button waves='light'>Send</Button>
			</div>
		)
	}
}

export default Chat