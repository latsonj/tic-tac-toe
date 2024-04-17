let gameBoard = (function() {
  const row1 = ["A", "B", "C"];
  const row2 = ["A", "B", "C"];
  const row3 = ["A", "B", "C"];
  
  return {
    row1,
    row2,
    row3,
  }
})();

console.log(gameBoard);

function createPlayer(name, marker) {
  return {
    name,
    marker,
  }  
}

let tom = createPlayer("Tom", "X");
console.log(tom);

let bob = createPlayer("Bob", "O");
console.log(bob);

let julie = createPlayer("Julie", "#");
console.log(julie);

let jill = createPlayer("Jill", "$");
console.log(jill);