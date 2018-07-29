import React from 'react';

const Tiles = ({index,color,TileClick,arr}) => {
    return(
        <div class = "square" onClick={()=>TileClick(color,index)}>
        {
            arr && arr[index]!=='n'?<img alt='img' src={`https://robohash.org/${color}?10*10`}/>:
            <img alt='img1' src={`https://previews.123rf.com/images/kmiragaya/kmiragaya1007/kmiragaya100700029/7306510-seamless-white-square-tiles-texture.jpg`}/>
        }
            
        </div>
    )
}
export default Tiles;
