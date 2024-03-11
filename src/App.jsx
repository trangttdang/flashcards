import './App.css';
import FlashCardContainer from './components/FlashCardContainer';
import cards from './assets/json/songs-groups.json';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1 style={{ color: "white" }}>Who is it?</h1>
        <h2 style={{ color: "white" }}>Given the song names, try to guess the group name!</h2>
        <h2 style={{ color: "white" }}>Total cards display: 10</h2>
        <h2>✨✨✨✨✨✨✨</h2>
        <FlashCardContainer flashcards={cards} />
      </div>
    </div>
  )
}

export default App;
