import React from 'react'
import {Container} from 'semantic-ui-react'
import MessageItem from './MessageItem'

class MessageListArea extends React.PureComponent {
    render() {
        let senderName = 'Maor Rozevich';
      return (
        <Container>
            <MessageItem username="Maor Rozevich" senderName={senderName} />
            <MessageItem username="Noa Elbaz"  senderName={senderName}/>
      </Container>
      )
    }
}

export default MessageListArea;