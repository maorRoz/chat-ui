import React from 'react'
import {Container,Label,Item} from 'semantic-ui-react'
import avatar from '../assets/person.png'


class MessageItem extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {messageOwner : this.props.senderName}
    }
    render() {
        let role = "Member";
        let color ="#e6faff";
        if(this.state.messageOwner === this.props.username){
            role = "You";
            color="#cdcdb1";
        }
      return (
        <Item style={{backgroundColor: color}}>
        <Item.Image src={avatar} size={'tiny'} />
        <Item.Content >
          <Item.Header>
          <Label>{this.props.username}
            <Label.Detail>{role}</Label.Detail>
            </Label>
          </Item.Header>
          <Item.Description>
          heh
          </Item.Description>
        </Item.Content>
      </Item>
      )
    }
}

export default MessageItem;