import './App.css';
import data from './souvenirs.json'
import Document from './Document.js'
import {React, Component} from 'react';


class App extends Component {

    state = {
      history : [],
      currentSouv : Math.floor(Math.random() * data.length),
    };

  nextSouvenir = e =>{
    const theme = e.target.textContent;
    var listSouvenir = [];
    var newSouvenir;
    var newSouvenirId = this.state.currentSouv;
    console.log("click");
    data.forEach(souvenir => { 
      if(souvenir.themes.includes(theme)){
        listSouvenir.push(souvenir);
      }
    })
    
    if (listSouvenir.length > 1){
      while(newSouvenirId === this.state.currentSouv ){
        newSouvenir = listSouvenir[Math.floor(Math.random() * listSouvenir.length)];
        newSouvenirId = data.findIndex(((souvenirs) => souvenirs === newSouvenir))
      }
    }
    
    this.setState({currentSouv : newSouvenirId} )
    
    
  }

  render() {
    const souvenir = data[this.state.currentSouv]
    return (
      <div className="App">
        <header className="App-header">
        <Document 
          path = {souvenir.path}
          desc = {souvenir.name}
          format = {souvenir.format}
          themes = {souvenir.themes}
          onClick = {this.nextSouvenir}
        />

        </header>
      </div>
    );
  }
}

export default App;