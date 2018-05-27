import React, { Component } from 'react'
import { Input, Button, Preloader } from 'react-materialize'
import './Chat.css'
import axios from 'axios'

class Chat extends Component{
	constructor(props){
		super(props)
		this.state = {
			content: '',
			show: false,
			isSpam: null
		}
	}
	onSubmit(){
		this.setState({show: true, isSpam: null})
		axios.post('/predict', {"mail": this.state.content}).then(res => {
			this.setState({isSpam: res.data})
		})
	}
	render(){
		return(
			<div className='chat'>
				<Input type='textarea' onChange={(event) => this.setState({content: event.target.value})}/>
				<Button waves='light' onClick={() => this.onSubmit()}>Send</Button>
				<div className='response'>
					{
						this.state.show ? 
							this.state.isSpam ? <div>{
								this.state.isSpam === 'ham' ?
								<div className='result'>
									<div className="image">
										<img src="/assets/success.jpg" />
									</div>
									<div className="result-text">
										HAM!
									</div>
								</div>
								: this.state.isSpam === 'spam' ? 
								<div className="result">
									<div className="image">
										<img src="/assets/reject.jpg" />
									</div> 
									<div className="result-text">
										SPAM!
									</div>
								</div>		
								: null
							}</div> : <Preloader flashing/>
						: null
					}
				</div>
			</div>
		)
	}
}

export default Chat