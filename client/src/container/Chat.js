import React, { Component } from 'react'
import { Input, Button, Preloader, Icon } from 'react-materialize'
import './Chat.css'
import axios from 'axios'
import Spam from './Spam'
import Mails from './Mails'

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
	randomSpam(){
		this.setState({content: Spam[Math.floor(Math.random() * 6)]})
	}
	randomMail(){
		this.setState({content: Mails[Math.floor(Math.random() * 3)]})
	}
	clear(){
		this.setState({content: '', show: false})
	}
	render(){
		return(
			<div className='chat'>
				<Input 
					type='textarea' 
					onChange={(event) => this.setState({content: event.target.value})}
					value={this.state.content}
					style={{'overflow':'scroll', 'height': '100px'}}
				/>
				<Button waves='light' onClick={() => this.onSubmit()}>Send<Icon left>send</Icon></Button>
				<Button waves='light' className='red' onClick={() => this.clear()} style={{'margin-left':'20px'}}>CLEAR<Icon left>clear</Icon></Button>
				<Button waves='light' className='orange' onClick={() => this.randomSpam()} style={{'margin-left':'20px'}}>SPAM</Button>
				<Button waves='light' className='blue' onClick={() => this.randomMail()} style={{'margin-left':'20px'}}>HAM</Button>
				<div className='response'>
					{
						this.state.show ? 
							this.state.isSpam ? <div>{
								this.state.isSpam === 'ham' ?
								<div className='result'>
									<div className="image">
										<img src="/assets/success.png" />
									</div>
									<div className="result-text">
										HAM!
									</div>
								</div>
								: this.state.isSpam === 'spam' ? 
								<div className="result">
									<div className="image">
										<img src="/assets/reject.png" />
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