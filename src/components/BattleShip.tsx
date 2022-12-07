import { FC } from "react";
import classNames from "classnames";

import { BattleShipId, battleships } from "../data/ships";

export const BattleShip: FC<{
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
