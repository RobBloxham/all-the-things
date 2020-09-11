import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import BensThings from '../BensThings/BensThings'
import RobsThings from '../RobsThings/RobsThings'

class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://i.imgur.com/C3PmdhO.jpg",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Rugby",
        image: "https://i.imgur.com/X4VC4nm.jpg",  
        attributes: ["scruffy", "happy", "sleepy", "wise"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],
    robsThings: [
      {
        name: "formula 1 racing",
        image: "https://i.pinimg.com/originals/fd/51/dd/fd51dd82fcff99b3fd0d4dc2c99e6b4c.jpg",  
        attributes: ["fast", "fun", "dangerous", "risk-calculation"],
      },
      {
        name: "Beer",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/1f/30/56/beer-beautiful-beer.jpg",
        attributes: ["tasty", "leads to fun times", "leads to not so fun times", "readily available"], 
      },
      {
        name: "Games",
        image: "https://singularityhub.com/wp-content/uploads/2018/11/young-gamer-playing-video-game_shutterstock_624801452.jpg",
        attributes: ["very attractive", "useful probably!", "good for pwning noobs", "such hip", "played by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://miro.medium.com/max/8064/1*yJ8btq82OFOAhJQLigoQpQ.jpeg", 
        attributes: ["tastes good?", "consistent poops maybe?", "probably tacos sometimes!", "it might have come from a farm somewhere, at least one ingredient did!"], 
      },
    ]  

  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/themanliestthings">Ben's Things</a><br/>
              <a href="/thesleepiestthings">Rob's Things</a> 
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/themanliestthings'
          render={() => 
            <BensThings 
              bensThings={this.state.bensThings}
            />
        }/>
        <Route 
          exact path='/thesleepiestthings'
          render={() => 
            <RobsThings
              robsThings={this.state.robsThings}
            />
        }/>
      </>
      
    );
  }
}
 
export default App;

