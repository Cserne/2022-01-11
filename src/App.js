import {useState} from 'react'
import './index.css';


function App() {
  
  const [pageName, setpageName] = useState("Home")
  
  const [shouldShowLanding, setShouldShowLanding] = useState(true);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello world!</div>
        <button onClick={() => setpageName ("Home")}>Home</button>
        <button onClick={() => setpageName ("About")}>About</button>
        <button onClick={() => setpageName ("Landing")}>Contact</button>
        <div>{shouldShowLanding ? <div>Landing page</div> : <div>Home page</div>}</div>
        <button onClick={() => setShouldShowLanding(!shouldShowLanding)}>Váltás</button>
        <main>
          {pageName === "Home" && <div>Homepage component</div>}
          {pageName === "About" && <div>About component</div>}
          {pageName === "Landing" && <div>Landing component</div>}
        </main>

        <div>{pageName !== "Landing" && <div>This is not the landing page.</div>}</div>
        
      </header>
    </div>
  );
}

export default App;
