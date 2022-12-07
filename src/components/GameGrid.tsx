import * as React from "react";
import classnames from "classnames";

const GameGrid: React.FC<{
   grid: Array<Array<number>>;
   selectable: boolean;
}> = ({ grid, selectable }) => {
   return (
      <div className="grid w-full h-[140%] grid-cols-10 border-4 border-blue-400 grid-rows-10 rounded">
         {grid.flat().map((v) => {
            return (
               <div
                  className={classnames(
                     "col-span-1 row-span-1 border w-full h-full bg-gray-50",
                     selectable
                        ? "cursor-crosshair hover:bg-yellow-300 hover:bg-opacity-50 duration-300"
                        : "cursor-not-allowed"
                  )}
               />
            );
         })}
      </div>
   );
};

export default GameGrid;
