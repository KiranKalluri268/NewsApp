import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="News-container">
        <News />
      </div>
    </div>
  );
}

export default App;