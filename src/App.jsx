import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
 
const URL = 'https://rickandmortyapi.com/api/character?count=20';


function App() {
  const [characters, setCharacters] = useState([]);

  const handleGetApi = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCharacters(data.results);
  };

  return (
    <>
      <div className="card-container">
        {characters.map((character, index) => (
          <Card 
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            genderCharacter={character.gender}
          />
        ))}
      </div>
      <button className='buttonCard' onClick={handleGetApi}>Generar Personaje</button>
    </>
  );
}

export default App;
