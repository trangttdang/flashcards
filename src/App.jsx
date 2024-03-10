import './App.css';
import FlashCardContainer from './components/FlashCardContainer';
import cards from './assets/json/songs-groups.json';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Guess K-pop Groups</h1>
        <FlashCardContainer flashcards={cards}/>
      </div>
    </div>
  )
}

export default App;
