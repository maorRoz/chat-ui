import React from 'react'
import {Item,Container} from 'semantic-ui-react'
import MessageItem from './MessageItem'

class MessageListArea extends React.PureComponent {
    render() {
        let senderName = 'Maor Rozevich';
      return (
        <Item.Group style={{marginTop: '50px' , marginBottom: '50px' ,backgroundColor: "white" ,height: "550px"}}>
            <MessageItem username="Maor Rozevich" senderName={senderName} />
            <MessageItem username="Noa Elbaz"  senderName={senderName}/>
            <MessageItem username="Moshe Elbaz"  senderName={senderName}/>
      </Item.Group>
      )
    }
}

export default MessageListArea;