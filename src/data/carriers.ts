export type BattleShipId =
   | "CARRIER"
   | "BATTLESHIP"
   | "CRUISER"
   | "SUBMARINE"
   | "DESTROYER"
   | string;

export const carriers = [
   {
      id: "CARRIER",
      name: "Carrier",
      dots: 5,
   },
   {
      id: "BATTLESHIP",
      name: "Battleship",
      dots: 4,
   },
   {
      id: "CRUISER",
      name: "Cruiser",
      dots: 3,
   },
   {
      id: "SUBMARINE",
      name: "Submarine",
      dots: 3,
   },
   { id: "DESTROYER", name: "Destroyer", dots: 2 },
];
