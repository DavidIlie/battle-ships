import type { NextPage } from "next";
import { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { BattleShip } from "../components/BattleShip";
import GameGrid from "../components/GameGrid";

import { BattleShipId, battleships } from "../data/ships";

export const createGrid = Array.from({ length: 10 }, (_, i) => [
   0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);

const Game: FC = () => {
   const [pickableShips, setPickableShips] = useState(battleships);
   const [selectedShip, setSelectedShip] = useState<BattleShipId | null>(null);

   const [playerGrid, setPlayerGrid] = useState(createGrid);
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
            <GameGrid grid={playerGrid} selectable={true} />
         </div>
         <div className="w-1/3">
            <h1 className="pb-1 mb-2 text-2xl font-medium border-b-2">
               Computer
            </h1>
            <GameGrid
               grid={computerGrid}
               selectable={pickableShips.length === 0}
            />
         </div>
      </div>
   );
};

const MainPage: NextPage = () => {
   const [startGame, setStartGame] = useState(
      process.env.NODE_ENV !== "production"
   );
   return (
      <Slide direction="down" duration={400}>
         <div className="container h-[90vh] py-12 mx-auto">
            <h1 className="text-3xl font-medium text-center">
               Battle Ships Game
            </h1>
            {startGame ? (
               <Game />
            ) : (
               <div className="w-full py-2">
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
