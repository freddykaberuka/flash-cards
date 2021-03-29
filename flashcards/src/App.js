import React, { Component } from 'react'
import './App.css'
import Card from './components/Card/card'
import NextBtn from './components/button/button'
import Header from './components/header'
import Aside from './components/aside'
import Footer from './components/footer'

class App extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state={
      cards:[
        {id: 1, question:"What is a class?", answer:"A class is a blueprint for creating objects. A class contains methods and variables which are a class instance."},
        {id: 2, question:"What is an array?", answer:"An array is a container that keeps a specific number of similar data types."},
      ],
      currentCard:{}
    }
  }
  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards:currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }
  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }
  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  render(){
    return(
      <div className="App">

        <Header />
        <div className="container">
          <Aside />
          
        <div className="cardRow">
        <Card question={this.state.currentCard.question}
              answer={this.state.currentCard.answer}/>
              <br/>
              <div className="" style={{float:"center", paddingLeft:"80px"}}><NextBtn nextBtn={this.updateCard}/> </div> 
      </div>
      </div>
      <Footer />
      </div>
      
    );
  

  }
}

export default App;
