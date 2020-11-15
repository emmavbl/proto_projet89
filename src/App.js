import './App.css';
import data from './souvenirs.json'
import Document from './Document.js'

function App() {
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
      {data.map((data, index) => (

        <Document 
          key={index} 
          path={data.path} 
          desc={data.name}
          format = {data.format}
          themes = {data.themes}
        /> 

      ))}
      </header>
    </div>
  );
}

export default App;
