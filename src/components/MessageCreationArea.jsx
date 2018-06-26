import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {messageSender: this.sendMessage.bind(this)};
  }
  componentDidMount(){
    document.getElementById("messageSender").addEventListener("click",this.state.messageSender);
    document.getElementById("messageBodyField").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("messageSender").click();
      }
    });
  }
  sendMessage(){
    let messageWrapper = {
      avatar: null,
      username: document.getElementById("userNameField").value,
      text: document.getElementById("messageBodyField").value
    }
    if(messageWrapper.text.length > 0 && messageWrapper.username.length > 0){
      this.props.socket.emit("spotim/chat",messageWrapper);
    }
    document.getElementById("messageBodyField").value = "";
  }
  render() {
    return <Container style={{ backgroundColor: '#ddd',height: '80px'}}>
        <Input  style={{marginTop: '20px',marginRight: '7px'}} type="text" id="userNameField" placeholder="Enter your Name"/>
        <Input style={{width: '72%' ,marginRight: '7px'}} type="text" id="messageBodyField" placeholder="Say Something!"/>
        <Input type="submit" value="Send" id="messageSender"  />
    </Container>
  }
}

export default MessageCreationArea;