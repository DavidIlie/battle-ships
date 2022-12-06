import type { NextPage } from "next";
import { FC, useState } from "react";
import classNames from "classnames";

import { BattleShipId, carriers } from "../data/carriers";

const Game: NextPage = () => {
   const [pickableCarriers, setPickableCarriers] = useState(carriers);
   const [selectedPlaceCarrier, setSelectedPlaceCarrier] =
      useState<BattleShipId | null>(null);

   return (
      <div className="container max-w-4xl h-[90vh] py-12 mx-auto">
         <h1 className="text-3xl font-medium text-center">Battle Ships Game</h1>
         <div className="flex items-center justify-center gap-8 py-12">
            <div className="w-full text-2xl font-medium">
               <h1 className="pb-1 mb-2 border-b-2">Your Ships</h1>
               {pickableCarriers.map((carrier, index) => (
                  <BattleShip
                     id={carrier.id}
                     selected={selectedPlaceCarrier === carrier.id}
                     changeState={setSelectedPlaceCarrier}
                     key={index}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

const BattleShip: FC<{
   id: BattleShipId;
   selected: boolean;
   changeState: (id: BattleShipId | null) => void;
}> = ({ id, selected, changeState }) => {
   const carrier = carriers.filter((s) => s.id === (id as never as string))[0];
   return (
      <div
         className={classNames(
            selected ? "bg-blue-400" : "bg-blue-500",
            "py-1 px-2 flex justify-between text-white my-1 w-[20%] rounded hover:bg-gray-400 duration-150 cursor-pointer"
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

export default Game;
