import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {messageSender: () => this.sendMessage()};
  }
  componentDidMount(){
    document.getElementById("messageSender").addEventListener("click",this.state.messageSender);
    document.getElementById("userNameField").addEventListener("keyup",() => {
      this.props.updateSenderName(document.getElementById("userNameField").value);
    })
    document.getElementById("messageBodyField").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("messageSender").click();
      }
    });
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
    return <Container className={'message-creation-container'}>
        <Input className={'message-creation-inputUserName'} type="text" id="userNameField" placeholder="Enter your Name"/>
        <Input className={'message-creation-inputText'} type="text" id="messageBodyField" placeholder="Say Something!"/>
        <Input type="submit" value="Send" id="messageSender"  />
    </Container>
  }
}

export default MessageCreationArea;