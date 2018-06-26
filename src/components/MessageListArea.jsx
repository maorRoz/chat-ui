import React from 'react'
import {Item} from 'semantic-ui-react'
import MessageItem from './MessageItem'

class MessageListArea extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = { messages : []};
      }
    
    componentDidMount(){
        let senderName = 'Morpheus';
        this.props.socket.on("spotim/chat",function(messageWrapper){
            console.log(messageWrapper);
            let messageWrapperTag = (<MessageItem username={messageWrapper.username} key={this.state.messages.length+1}
                 text={messageWrapper.text} avatar={messageWrapper.avatar} senderName={senderName}/>);
            this.setState({messages: [...this.state.messages,messageWrapperTag]});
        }.bind(this));
    }
    render() {
      return (
        <Item.Group style={{marginTop: '50px' , marginBottom: '50px' ,backgroundColor: "white" ,height: "550px"}}>
        {this.state.messages}
      </Item.Group>
      )
    }
}

export default MessageListArea;