import './App.css';
import data from './souvenirs.json'
import Document from './Document.js'
import History from './History.js'
import {React, Component} from 'react';


class App extends Component {
  constructor(props){
    super(props)
    const idFirstSouvenir = Math.floor(Math.random() * data.length);
    this.state = {
      history : [idFirstSouvenir],
      currentSouv : idFirstSouvenir,
    };
  }
    

  previousSouvenir = e =>{
    var copyHistory = this.state.history;
    var avantDer = copyHistory[copyHistory.length-2];
    copyHistory.pop()
    this.setState({history : copyHistory })
    this.setState({currentSouv : avantDer})
  }


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
    var newHistory = this.state.history.concat(newSouvenirId)
    this.setState({history : newHistory} )
    
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
          {(this.state.history.length > 1) && <History onClick={this.previousSouvenir} />}
        </header>
      </div>
    );
  }
}

export default App;