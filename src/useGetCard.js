import { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk';
import CardObject from './CardObject';
pokemon.configure({ apiKey: '' });

//Fetch card data and modify loading flag
const useGetCard = (id) => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const card = await pokemon.card.find(id);
        //console.log(card);
        const cardData = new CardObject(card.name,card.id,card.images.small, card.set.id, card.set.name, card.set.series, card.set.printedTotal, card.number, card.types, card.supertype, card.artist, card.rarity, card.nationalPokedexNumbers, card.tcgplayer);
        //console.log(cardData);
        setCardData(cardData);
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, [id]);

  return { cardData, loading };
};

export default useGetCard;