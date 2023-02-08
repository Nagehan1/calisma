

import './App.css';
import Forms from './Forms';
import Heading from './Heading';
import Idcom from './Idcom';

function App() {
  return (
    <div className="App">
     <Heading/>
     <Idcom name="nagehan" surname='uyumaz'/>
    <Forms title="User Form"/>
    </div>
  );
}

export default App;
