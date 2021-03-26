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
        {id: 1, question:"Capital city of Rwanda", answer:"Kigali"},
        {id: 2, question:"President of Rwanda", answer:"Kagame"},
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
        <h1 className="" style={{color:"black", paddingLeft:"4px",marginLeft: "6%",width: "100%",paddingLeft:"16px"}}>List of Questions and Answers</h1>
        <div className="container">
          <Aside />
        <div className="cardRow">
        <Card question={this.state.currentCard.question}
              answer={this.state.currentCard.answer}/>
              <br/>
              <div className="" style={{float:"right"}}><NextBtn nextBtn={this.updateCard}/> </div> 
      </div>
      </div>
      <Footer />
      </div>
      
    );
  

  }
}

export default App;
