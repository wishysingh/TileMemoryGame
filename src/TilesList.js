import React from 'react';
import Tiles from './Tiles.js';

const TilesList = ({TileClick,arr,ar}) => {
    
    return (
        <div>    
            {ar.map((k,x) => {
                return <Tiles key={x} index={x} color={k} TileClick={TileClick} arr={arr}/>
            })}
        </div>
    )
}
export default TilesList;