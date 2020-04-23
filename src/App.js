import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    fruit: [
      {fruitName: ''},
      {theGood: ''},
      {fruitBenefit: ''}
    ],
    userName: ''
  }  

  nameChangeHandler = (event) => {
    this.setState ( {
      userName: event.target.value
    } )
  }

  printWealth = (chosenFruit) => {
    if (chosenFruit === 'Pineapple') {
      this.setState( {
        fruit: [
          {fruitName: 'Pineapple'},
          {theGood: 'Dear Friend'},
          {fruitBenefit: 
          'Loaded With Nutrients. Contains Disease-Fighting Antioxidants. Its Enzymes Can Ease Digestion. May Help Reduce the Risk of Cancer. May Boost Immunity and Suppress Inflammation. May Ease Symptoms of Arthritis. May Speed Recovery After Surgery or Strenuous Exercise.'}
        ]
      } )
    }
    if (chosenFruit === 'Kiwi') {
      this.setState ( {
        fruit: [
          {fruitName: 'Kiwi'},
          {theGood: 'Dear Friend'},
          {fruitBenefit: 
          'Helps treat asthma Aids digestion Boosts immune system Helps prevent sickness Manages blood pressure Reduces blood clotting Protects against vision loss Sleep Inducer Good Source of Dietary Fiber Powerhouse of Vitamins and Minerals Good Source of Folate Beautiful Skin'}
        ]
      } )
    }
    if (chosenFruit === 'Banana') {
      this.setState ( {
        fruit: [
          {fruitName: 'Banana'},
          {theGood: 'Dear Friend'},
          {fruitBenefit: 
            'Contain Many Important Nutrients.Bananas Contain Nutrients That Moderate Blood Sugar Levels. Bananas May Improve Digestive Health. Bananas May Aid Weight Loss. Bananas May Support Heart Health. Bananas Contain Powerful Antioxidants. Bananas May Help You Feel More Full. Unripe Bananas May Improve Insulin Sensitivity. '}
        ]
      } )
    }
  }

  render() {
    const styleBP = {
      backgroundColor: 'LightYellow',
      font: 'inherit',
      border: '1px solid LightOrange',
      padding: '8px',
      cursor: 'pointer',
      margin:'16px 20px auto auto'
    };
    const styleBK = {
      backgroundColor: 'Green',
      font: 'inherit',
      border: '1px solid lightGreen',
      padding: '8px',
      cursor: 'pointer',
      margin:'16px 20px auto auto'
    };
    const styleBB = {
      backgroundColor: 'Yellow',
      font: 'inherit',
      border: '1px solid LightOrange',
      padding: '8px',
      cursor: 'pointer',
      margin:'16px 20px auto auto'
    };
   
  return (
    <div className="App">
      <h1>Welcome to Fruit World </h1>
      
      <UserInput
        changed={this.nameChangeHandler}
        value={this.state.userName}
      />

      <h2> Click on the Fruit You like the most!</h2>
      <button
        style={styleBP}
        onClick={this.printWealth.bind(this,'Pineapple')}>
        PinneApple
      </button>
      <button
        style={styleBK}
        onClick={ () => this.printWealth('Kiwi')}>
        Kiwi
      </button>

      <button
        style={styleBB}
        onClick={ () => this.printWealth('Banana')}>
        Banana
       </button>
       
      <UserOutput
        fruit={this.state.fruit[0].fruitName}
        benefits={this.state.fruit[2].fruitBenefit}
        name={this.state.userName}
        theGood={this.state.fruit[1].theGood}
      ></UserOutput>
      </div>

    );
  }
}


export default App;
