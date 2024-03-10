import './App.css';
import FlashCard from './components/FlashCard';
import cards from './assets/json/songs-groups.json';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Guess K-pop Groups</h1>
        <FlashCard frontContent={cards[0]["song"]} backContent={"hello"}/>
      </div>
    </div>
  )
}

export default App;
