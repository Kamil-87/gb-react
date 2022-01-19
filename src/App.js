import './App.css';
import {Message} from "./components";

const text = 'Hello GB!'

function App() {
  return (
    <div className="App">
        <Message text={text}/>
    </div>
  );
}

export default App;
