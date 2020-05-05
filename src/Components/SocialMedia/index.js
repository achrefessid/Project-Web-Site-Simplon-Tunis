import React from 'react';
import { SocialMedias, Social, Icon, SocialDesc, Span, SpanInfo, Li } from './style.js'
import Axios from 'axios';

class SocialMedia extends React.Component {

  state = {
    social: []
  }

  componentDidMount () {
    Axios.get('js/data.json')
    .then( res =>
      { this.setState({ social : res.data.social })
    })
  }

  render() {

    const { social } = this.state 

    const socialList = social.map( (socialItem) => {
      return (
        <Social item={socialItem.id} key={socialItem.id}>

        <Li><a href={socialItem.href} target="_blanks">

        <Icon className={socialItem.icon}></Icon></a></Li> 

        <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialDesc>

        </Social>
      )
    })

    return (
      <SocialMedias>

      {socialList}

      </SocialMedias>
    )
  }                               
}

export default SocialMedia; 