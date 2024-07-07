/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Data from "./../../shared/Data";
import Image from "next/image";

function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    setGames(Data.GameList);
  },[]);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4">
      {games.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div key={item.id}className="flex flex-col items-center cursor-pointer ">
              <Image src={item.image} width={45} height={45} alt="" className="hover:animate-bounce transition-all duration-150" />
              <h2 className="text-[14px] text-center">{item.name}</h2>
          </div>
      ))}
    </div>
  );
}

export default GameList;
