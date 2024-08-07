import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css';
import useGetCard from './useGetCard';

//Skeletonizes non-loaded data and performs async fetch via useGetCard
const CardComponent = ({ id }) => {
    const { cardData, loading } = useGetCard(id);

    //console.log(cardData);
    return (
        <div className="card">
            {loading ? (
                <div className="skeleton-card">
                    <Skeleton height={200} width={300} />
                    <Skeleton height={20} width={150} style={{ margin: '10px 0' }} />
                    <Skeleton count={3} />
                </div>

            ) : (
                <div className="loaded-card" style={{ 
                    backgroundImage: `url('/Infocard${cardData?.types?.[0]?.toUpperCase() || 'NORMAL'}.png')`,
                    backgroundPosition: 'center'
                }}>
                    <div className="infoPanel">
                        <p className="name">{cardData.name}</p>
                        <p className="series-set">{cardData.setSeries}, {cardData.setSeries === cardData.setName ? "Core Set" : cardData.setName}</p>
                        <p className="rarity">{cardData.rarity}, {cardData.number}/{cardData.printedTotal}</p>
                        <p className="market-price">Market: ${cardData.tcgPlayer.prices.holofoil.market}</p>
                        <p className="low-price">Low: ${cardData.tcgPlayer.prices.holofoil.low}</p>
                        <p className="mid-price">Mid: ${cardData.tcgPlayer.prices.holofoil.mid}</p>
                        <p className="high-price">High: ${cardData.tcgPlayer.prices.holofoil.high}</p>
                        <p className="last-updated">Last Updated: {cardData.tcgPlayer.updatedAt}</p>
                    </div>


                    <div className="imagePanel">
                        <img src={cardData.imageUrl} alt={cardData.name} />
                    </div>

                </div>
            )
            }
        </div>
    )
}
export default CardComponent;