import './App.css';
import React, { Component } from 'react';
import Botao from './components/Botao';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
  }
  quebraBiscoito() {
    let state = this.state;
    let numeroRandom = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroRandom];
    this.setState(state);
  }

  render(){
    return(
      <div className="App">
        <img src={require("./assets/biscoito.png").default} className="img" />
        <Botao nomeBtn="Abrir Biscoito" acaoBtn={ this.quebraBiscoito }/>
        <h3>{ this.state.textoFrase }</h3>
      </div>
    );
  }
}


