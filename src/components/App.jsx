
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';
import MessageListArea from './MessageListArea'
import MessageCreationArea from './MessageCreationArea'

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;


class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {senderName : ""}
  }
  getUserName = (newSenderName) => {
    if(newSenderName !== ""){
      this.setState({senderName: newSenderName});
    }
  
  }
  render() { 
    return (
    <Container>
      <Container className={'spotim-header'}>
        <div className={'spotim-title'}>
          Welcome to the Spot.IM Chat app
        </div>
        <div>
          <Logo>
            <Image size={'tiny'} src={logo}/>
          </Logo>

        </div>
      </Container>
      <MessageListArea socket={this.props.socket} senderName={this.state.senderName}/>
      <MessageCreationArea socket={this.props.socket} updateSenderName={this.getUserName}/>
    </Container>
    )
  }
}

export default App;