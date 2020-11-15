import './App.css';
import data from './souvenirs/souvenirs.json'
import Image from './Image.js'

function App() {
  console.log(data);
  

  return (
    <div className="App">
      <header className="App-header">
      {data.map((data) => (
        //<h1>{data.name}</h1>
        <Image path={data.path} format={data.format}/>
      ))}
      </header>
    </div>
  );
}

export default App;
