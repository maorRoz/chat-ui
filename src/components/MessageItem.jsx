import React from 'react'
import {Container,Image,Label,Message} from 'semantic-ui-react'
import avatar from '../assets/person.png'


class MessageItem extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {messageOwner : this.props.senderName}
    }
    render() {
        let role = "Friend";
        if(this.state.messageOwner === this.props.username){
            role = "You";
        }
      return (
        <Container>
            <Label as='a' image>
            <Image src={avatar} size={'tiny'}></Image>
            {this.props.username}
            <Label.Detail>{role}</Label.Detail>
            </Label>
            <Message
            content='Get the best news in your e-mail every day.'
            />
        </Container>
      )
    }
}

export default MessageItem;