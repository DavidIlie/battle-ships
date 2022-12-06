import type { NextPage } from "next";
import { FC, useState } from "react";
import classNames from "classnames";

import { BattleShipId, carriers } from "../data/carriers";

const Game: NextPage = () => {
   const [pickableCarriers, setPickableCarriers] = useState(carriers);
   const [selectedPlaceCarrier, setSelectedPlaceCarrier] =
      useState<BattleShipId | null>(null);

   return (
      <div className="container max-w-4xl min-h-screen py-12 mx-auto">
         <h1 className="text-2xl font-medium text-center">Battle Ships Game</h1>
         <div className="flex items-center justify-center gap-8 py-12">
            <div className="w-full text-xl font-medium">
               <h1>Your Ships</h1>
               {pickableCarriers.map((carrier, index) => (
                  <BattleShip
                     id={carrier.id}
                     state={
                        selectedPlaceCarrier === carrier.id
                           ? "pending"
                           : "available"
                     }
                     changeState={setSelectedPlaceCarrier}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

const BattleShip: FC<{
   id: BattleShipId;
   state: "available" | "pending";
   changeState: (id: BattleShipId | null) => void;
}> = ({ id, state, changeState }) => {
   const carrier = carriers.filter((s) => s.id === (id as never as string))[0];
   return (
      <div
         className={classNames(
            state === "available"
               ? "bg-blue-500"
               : state === "pending" && "bg-gray-400",
            "py-1 px-1 flex justify-between text-white my-1 w-[20%] rounded hover:bg-gray-400 duration-150 cursor-pointer"
         )}
         onClick={() =>
            state === "available" ? changeState(id) : changeState(null)
         }
      >
         {carrier.name}
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
