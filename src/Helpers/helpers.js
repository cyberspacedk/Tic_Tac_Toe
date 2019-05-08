export const whoWin = cell => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0, max = rows.length; i < max; i++) {
    const [a, b, c] = rows[i];

    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
      return cell[a];
    }
  }
  return null;
};

export const  storeResult = (totalGame, setTotalGame)=>{
  setTotalGame(totalGame) 
}	 

export const setLocal = (key, value)=> localStorage.setItem(key, JSON.stringify(value));

export const addScore = (winner , setScore1, setscore2) => {
  winner === "X" && setScore1();
  winner === "O" && setscore2();
}