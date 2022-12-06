export const createGrid = () => {
   const grid = [];
   for (let i = 0; i < 10; i++) {
      grid[i] = [];
      for (let j = 0; j < 10; j++) {
         //@ts-ignore
         grid[i][j] = 0;
      }
   }
   return grid;
};
