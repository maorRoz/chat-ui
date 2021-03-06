import React from 'react'
import {Item} from 'semantic-ui-react'
import MessageItem from './MessageItem'

class MessageListArea extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = { messages : []};
      }
    
    componentDidMount(){
        this.props.socket.on("spotim/chat",(messageWrapper)=>{
            console.log(messageWrapper);
            let messageWrapperTag = (<MessageItem username={messageWrapper.username} key={this.state.messages.length+1}
                 text={messageWrapper.text} avatar={messageWrapper.avatar} senderName={this.props.senderName}/>);
            this.setState({messages: [...this.state.messages,messageWrapperTag]});
        });
    }
    render() {
      return (
        <Item.Group className={'message-list-container'}>
        {this.state.messages}
      </Item.Group>
      )
    }
}

export default MessageListArea;