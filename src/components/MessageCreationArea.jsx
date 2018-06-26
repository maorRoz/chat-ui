import React from 'react'
import {Container,Input} from 'semantic-ui-react'



class MessageCreationArea extends React.PureComponent {
    render() {
      return <Container style={{ backgroundColor: '#ddd',height: '80px'}}>
          <Input  style={{marginTop: '20px',marginRight: '7px'}} type="text" id="userNameField" placeholder="Enter your Name"/>
          <Input style={{width: '72%' ,marginRight: '7px'}} type="text" id="messageBodyField" placeholder="Say Something!"/>
          <Input type="submit" value="Send"/>
      </Container>
    }
}

export default MessageCreationArea;