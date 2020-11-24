import './App.css';
import data from './souvenirs.json'
import Document from './Document.js'
// import History from './History.js'
import {React, Component} from 'react';


class App extends Component {
  constructor(props){
    super(props)
    const idFirstMem = Math.floor(Math.random() * data.nodes.length);
    const firstLink = this.getLink(idFirstMem);
    this.state = {
      // history : [idFirstSouvenir],
      currentMemory : idFirstMem,
      currentLink : firstLink,
    };
  }
    

  getLink(idMem){ 
    var linkToReturn;
    data.links.forEach(link => {
      if (link.source === idMem)
        linkToReturn = link;
    })
    return linkToReturn;
  }

  nextMemory = e =>{
    const nextMem = this.state.currentLink.target;
    const nextLink = this.getLink(this.state.currentLink.target);
    //change currentMemory and current Link
    this.setState({ 
      currentMemory: nextMem, 
      currentLink: nextLink
    })
    
  }

  render() {
    const memory = data.nodes[this.state.currentMemory]
    return (
      <div className="App" onClick = {this.nextMemory}>
        <header className="App-header">
          <Document 
            path = {memory.path}
            desc = {memory.name}
            format = {memory.format}
          />
        </header>
      </div>
    );
  }
}

export default App;