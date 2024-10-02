import { useState } from "react";
import {Tooltip, Grow} from '@mui/material';
import { watchlist } from "../data/data";
import { Form } from "react-router-dom";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
          <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem=({stock})=>{
  const [showWatchListActions, setShowWatchListActions]=useState(false);

  const handleMouseEnter=(e)=>{
      setShowWatchListActions(true);
  }

  const handleMouseLeave=(e)=>{
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
       <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
       <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? 
        (<DownIcon className="down" />):
         (<UpIcon className="up"/>)}
         
        <span className="price">{stock.price}</span>
       </div>
      </div>
      {showWatchListActions && <watchListActions uid={stock.name}/>}
    </li>
  )
}

const watchListActions = ({uid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
    </span>
  )
}