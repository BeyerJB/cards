import './Card.css';
import { useState, useEffect } from "react";
import CardComponent from './Card';

//Fetch card IDs from local text file
async function loadCollection() {
  try {
    let response = await fetch("./cards.txt");
    if (!response.ok) {
      throw new Error('Error loading collection file, invalid response: ' + response.statusText);
    }
    let text = await response.text();
    let ids = text.split('\n').map(ids => ids.trim());
    return ids;
  } catch (error) {
    console.error('Error loading collection file, general error: ', error);
    return [];
  }
}


//Push card IDs to state variable
function App() {
  const [cardIds,setCardIds]= useState([]);
  useEffect(() => {
    const getIds = async () => {
      const collectionIds = await loadCollection();
      setCardIds(collectionIds)
    };
  
    getIds();
  }, []);


  return (
    <div className="cardBox">
  {cardIds.map(cardId=>(
    <CardComponent key={cardId} id={cardId} />
  ))}
    </div>
  );
}

export default App;
