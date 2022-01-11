import {useState} from 'react'
import './index.css';


function App() {
  
  const [shouldShowLanding, setterFunction] = useState(true);
  
  const toggleText = () => {
    console.log(shouldShowLanding);  
    setterFunction(!shouldShowLanding);
    console.log(shouldShowLanding);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello world!
        </div>
        <div>{shouldShowLanding ? <div>Landing page</div> : <div>Home page</div>}</div>
        <button onClick={toggleText}>Váltás</button>
      </header>
    </div>
  );
}

export default App;
