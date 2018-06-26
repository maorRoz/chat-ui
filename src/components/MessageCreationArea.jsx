import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
    render() {
      return <Container style={{position: 'fixed', bottom: '30px',left: '20%'}}>
        <Input  style={{marginRight: '7px'}} type="text" id="userNameField" placeholder="Enter your Name"/>
        <Input style={{width: '72%'}} type="text" id="messageBodyField" placeholder="Say Something!"/>
        <Input type="submit" value="Send"/>
      </Container>
    }
}

export default MessageCreationArea;