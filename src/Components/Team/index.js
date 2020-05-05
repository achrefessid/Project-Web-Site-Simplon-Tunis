import React, { Component } from 'react';
import axios from 'axios';    
import './style.css';

class Team extends Component {  

    state = {
      team : []
    }
  
    componentDidMount () {  
      axios.get('js/data.json').then( res => { this.setState({ team: res.data.team }) } )
    }
  
    render() {   
  
      const {team} = this.state;
  
      const teamList = team.map( (teamItem) => {    
        return (
        <div class="col-lg-3 col-sm-6" key={teamItem.id}>
            <div class="our-team">
                <div class="team-content">
                    <a href="#"><img src={teamItem.image} alt=""/></a>
                    <ul class="social-links">
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                        <li><a href="#" class="fab icon fa fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
                <div class="team-prof">
                    <h3>{teamItem.name}</h3>
                    <span>{teamItem.poste}</span>
                </div>
            </div>
            </div>
            )
          } 
          )            
 
    return (
<div class="container">
    <div class="row">
        {teamList}
        </div>
        </div>
  )
  }
  }

export default Team; 

