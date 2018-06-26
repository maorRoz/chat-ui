import React from 'react'
import {Label,Item} from 'semantic-ui-react'
import avatar from '../assets/person.png'


class MessageItem extends React.PureComponent {
    constructor(props){
        super(props);
        let avatarSource = avatar;
        if(typeof this.props.avatar === 'string' && ( this.props.avatar.includes(".png") || this.props.avatar.includes(".jpg"))){
            avatarSource = this.props.avatar;
        }
        this.state = {avatar: avatarSource}
    }
    render() {
        let role = "Member";
        let color = '#e6faff';
        if(this.props.username === this.props.senderName){
            role = "You";
            color= '#cdcdb1';
        }
      return (
        <Item style={{backgroundColor: color}}>
        <Item.Image src={this.state.avatar} size={'tiny'} />
        <Item.Content >
          <Item.Header>
          <Label>{this.props.username}
            <Label.Detail>{role}</Label.Detail>
            </Label>
          </Item.Header>
          <Item.Description>
          {this.props.text}
          </Item.Description>
        </Item.Content>
      </Item>
      )
    }
}

export default MessageItem;