import type { NextPage } from "next";
import { FC, useState } from "react";
import classNames from "classnames";
import { Slide } from "react-awesome-reveal";

import GameGrid from "../components/GameGrid";

import { BattleShipId, battleships } from "../data/ships";
import { createGrid } from "../lib/grid";

const Game: FC = () => {
   const [pickableShips, setPickableShips] = useState(battleships);
   const [selectedShip, setSelectedShip] = useState<BattleShipId | null>(null);

   const [playGrid, setPlayGrid] = useState(createGrid);
   const [computerGrid, setComputerGrid] = useState(createGrid);

   return (
      <div className="flex justify-center gap-4 py-6">
         <div className="w-1/3">
            <h1 className="pb-1 mb-2 text-2xl font-medium border-b-2">
               Your Ships
            </h1>
            {pickableShips.map((carrier, index) => (
               <BattleShip
                  id={carrier.id}
                  selected={selectedShip === carrier.id}
                  changeState={setSelectedShip}
                  key={index}
               />
            ))}
         </div>
         <div className="w-1/3">
            <h1 className="pb-1 mb-2 text-2xl font-medium border-b-2">You</h1>
            <GameGrid grid={playGrid} />
         </div>
         <div className="w-1/3">
            <h1 className="pb-1 mb-2 text-2xl font-medium border-b-2">
               Computer
            </h1>
            <GameGrid grid={computerGrid} />
         </div>
      </div>
   );
};

const BattleShip: FC<{
   id: BattleShipId;
   selected: boolean;
   changeState: (id: BattleShipId | null) => void;
}> = ({ id, selected, changeState }) => {
   const carrier = battleships.filter(
      (s) => s.id === (id as never as string)
   )[0];
   return (
      <div
         className={classNames(
            selected ? "bg-blue-400" : "bg-blue-500",
            "py-2 px-2 flex justify-between text-white my-2 w-2/3 rounded hover:bg-blue-400 duration-150 cursor-pointer"
         )}
         onClick={() => (selected ? changeState(null) : changeState(id))}
      >
         <p className="text-xl">{carrier.name}</p>
         <div className="flex items-center justify-center gap-1">
            {Array.from(Array(carrier.dots)).map((_n, index) => (
               <p
                  className="w-3 text-xs text-yellow-500 bg-yellow-500 h-1/2"
                  key={index}
               >
                  x
               </p>
            ))}
         </div>
      </div>
   );
};

const MainPage: NextPage = () => {
   const [startGame, setStartGame] = useState(false);

   return (
      <Slide direction="down" duration={400}>
         <div className="container h-[90vh] py-12 mx-auto">
            <h1 className="text-3xl font-medium text-center">
               Battle Ships Game
            </h1>
            {startGame ? (
               <Game />
            ) : (
               <div className="w-full py-4">
                  <p className="text-center">
                     Welcome to Battle Ships, press start to begin.
                  </p>
                  <button
                     onClick={() => setStartGame(true)}
                     className="flex justify-center px-6 py-2 mx-auto mt-3 font-medium duration-150 bg-red-500 rounded text-red-50 hover:bg-red-600"
                  >
                     START
                  </button>
               </div>
            )}
         </div>
      </Slide>
   );
};

export default MainPage;
