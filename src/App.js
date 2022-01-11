import './index.css';

const shouldShowLanding = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world!
        </p>
        <p>{ shouldShowLanding ? <p>Landing</p> : <p>Home</p> }</p>
      </header>
    </div>
  );
}

export default App;
