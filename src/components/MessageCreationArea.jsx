import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
  
  makeUpdateSenderName = () => this.props.updateSenderName(document.getElementById("userNameField").value);

  messageSender= () => this.sendMessage();

  sendMessageOnEnter(event){
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("messageSender").click();
    }
  }

  sendMessage(){
    let messageWrapper = {
      avatar: 123,
      username: document.getElementById("userNameField").value,
      text: document.getElementById("messageBodyField").value
    }
    if(messageWrapper.text.length > 0 && messageWrapper.username.length > 0){
      this.props.socket.emit("spotim/chat",messageWrapper);
    }
    document.getElementById("messageBodyField").value = "";
  }
  
  render() {
    console.log(this.makeUpdateSenderName);
    return <Container className={'message-creation-container'}>
        <Input className={'message-creation-inputUserName'} type="text" id="userNameField" placeholder="Enter your Name"
        onKeyUp={this.makeUpdateSenderName}/>
        <Input className={'message-creation-inputText'} type="text" id="messageBodyField" placeholder="Say Something!"
         onKeyUp={this.sendMessageOnEnter}/>
        <Input type="submit" value="Send" id="messageSender" onClick={this.messageSender}  />
    </Container>
  }
}

export default MessageCreationArea;