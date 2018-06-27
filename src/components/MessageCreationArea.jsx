import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {username: "",messageText: ""}
    this.handleChangeUserName = event => this.changeUserName(event);
    this.handleChangeMessageText = event => this.changeMessageText(event);
    this.handleSumbit = event => this.sendMessage(event);
  }

  changeUserName(event){
    this.setState({username: event.target.value})
  }

  changeMessageText(event){
    this.setState({messageText: event.target.value})
  }

  makeUpdateSenderName = () => this.props.updateSenderName(this.state.username);

  sendMessage(event){
    event.preventDefault();
    let messageWrapper = {
      avatar: 123,
      username: this.state.username,
      text: this.state.messageText
    }
    if(messageWrapper.text.length > 0 && messageWrapper.username.length > 0){
      this.props.socket.emit("spotim/chat",messageWrapper);
    }
    this.setState({messageText: ""});
  }
  
  render() {
    return <Container className={'message-creation-container'}>
    <form onSubmit={this.handleSumbit}>
        <Input className={'message-creation-inputUserName'} type="text" placeholder="Enter your Name"
        onKeyUp={this.makeUpdateSenderName} value={this.state.username} onChange={this.handleChangeUserName}/>
        <Input className={'message-creation-inputText'} type="text" placeholder="Say Something!"
         value={this.state.messageText} onChange={this.handleChangeMessageText}/>
        <Input type="submit" value="Send"  />
        </form>
    </Container>
  }
}

export default MessageCreationArea;