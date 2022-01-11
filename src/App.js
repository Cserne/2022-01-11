import {useState} from 'react'
import './index.css';


function App() {
  
  const [shouldShowLanding, setShouldShowLanding] = useState(true);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello world!
        </div>
        <div>{shouldShowLanding ? <div>Landing page</div> : <div>Home page</div>}</div>
        <button onClick={() => setShouldShowLanding(!shouldShowLanding)}>Váltás</button>
      </header>
    </div>
  );
}

export default App;
