// Two pools: daily & practice. Blocks are marked with '#'.

const PUZZLES = [
  // ----- Daily pool -----
  {
    id: "d-001",
    mode: "daily",
    title: "Daily • Word Mini",
    size: 4,
    // Word-square style (quick), but acceptable as a daily warm-up
    grid: [
      ["W","I","N","E"],
      ["I","D","E","A"],
      ["N","E","S","T"],
      ["E","A","T","S"]
    ],
    blocks: [],
    across: [
      { num: 1, row: 0, col: 0, answer: "WINE", clue: "Cab or merlot" },
      { num: 2, row: 1, col: 0, answer: "IDEA", clue: "Lightbulb moment" },
      { num: 3, row: 2, col: 0, answer: "NEST", clue: "Bird's home" },
      { num: 4, row: 3, col: 0, answer: "EATS", clue: "Grub, informally" }
    ],
    down: [
      { num: 1, row: 0, col: 0, answer: "WINE", clue: "Vintner's product" },
      { num: 2, row: 0, col: 1, answer: "IDEA", clue: "Concept" },
      { num: 3, row: 0, col: 2, answer: "NEST", clue: "Bundle of twigs" },
      { num: 4, row: 0, col: 3, answer: "EATS", clue: "Chow" }
    ]
  },
  {
    id: "d-002",
    mode: "daily",
    title: "Daily • Blocked Mini",
    size: 4,
    // Blocks so Across/Down words are different
    grid: [
      ["C","A","T","#"],
      ["A","#","R","O"],
      ["R","E","D","#"],
      ["D","O","N","E"]
    ],
    blocks: [{row:0,col:3},{row:1,col:1},{row:2,col:3}],
    across: [
      { num: 1, row: 0, col: 0, answer: "CAT", clue: "Alley prowler" },
      { num: 2, row: 1, col: 0, answer: "A", clue: "First letter" },
      { num: 3, row: 1, col: 2, answer: "RO", clue: "Greek letter pair (abbr.)" },
      { num: 4, row: 2, col: 0, answer: "RED", clue: "Stoplight color" },
      { num: 5, row: 3, col: 0, answer: "DONE", clue: "Finished" }
    ],
    down: [
      { num: 1, row: 0, col: 0, answer: "CARD", clue: "Playing ___" },
      { num: 2, row: 0, col: 1, answer: "AEON", clue: "Very long time (var.)" },
      { num: 3, row: 0, col: 2, answer: "TRO", clue: "Suffix with in-/in" },
      { num: 4, row: 1, col: 3, answer: "ONE", clue: "Single" }
    ]
  },

  // ----- Practice pool -----
  {
    id: "p-001",
    mode: "practice",
    title: "Practice • Classic",
    size: 4,
    grid: [
      ["M","A","S","K"],
      ["E","A","R","N"],
      ["N","O","T","E"],
      ["U","S","E","D"]
    ],
    blocks: [],
    across: [
      { num: 1, row: 0, col: 0, answer: "MASK", clue: "Face covering" },
      { num: 2, row: 1, col: 0, answer: "EARN", clue: "Get by working" },
      { num: 3, row: 2, col: 0, answer: "NOTE", clue: "Short message" },
      { num: 4, row: 3, col: 0, answer: "USED", clue: "Secondhand" }
    ],
    down: [
      { num: 1, row: 0, col: 0, answer: "MENU", clue: "List at a diner" },
      { num: 2, row: 0, col: 1, answer: "AROSE", clue: "Got up" },
      { num: 3, row: 0, col: 2, answer: "STUD", clue: "Earring type" },
      { num: 4, row: 0, col: 3, answer: "KNEED", clue: "Hit with a kneecap" }
    ]
  },
  {
    id: "p-002",
    mode: "practice",
    title: "Practice • Blocked",
    size: 4,
    grid: [
      ["S","A","#","L"],
      ["A","L","O","E"],
      ["P","#","E","N"],
      ["E","L","F","#"]
    ],
    blocks: [{row:0,col:2},{row:2,col:1},{row:3,col:3}],
    across: [
      { num: 1, row: 0, col: 0, answer: "SA", clue: "Saturday, briefly" },
      { num: 2, row: 0, col: 3, answer: "L", clue: "Fifty, in Rome" },
      { num: 3, row: 1, col: 0, answer: "ALOE", clue: "After-sun plant" },
      { num: 4, row: 2, col: 0, answer: "P", clue: "Greek rho's predecessor" },
      { num: 5, row: 2, col: 2, answer: "EN", clue: "Typo-width" },
      { num: 6, row: 3, col: 0, answer: "ELF", clue: "Tiny helper" }
    ],
    down: [
      { num: 1, row: 0, col: 0, answer: "SAP", clue: "Tree fluid" },
      { num: 2, row: 0, col: 1, answer: "ALLO", clue: "French 'hello' (var.)" },
      { num: 3, row: 1, col: 2, answer: "ONE", clue: "Single" },
      { num: 4, row: 1, col: 3, answer: "EEN", clue: "Poetic 'ever'" }
    ]
  }
];

function getPool(mode){
  return PUZZLES.filter(p => p.mode === mode);
}
function getDailyPuzzle(){
  const pool = getPool('daily');
  const day = Math.floor(Date.now() / 86400000);
  return pool[day % pool.length];
}
function getPracticePuzzle(){
  const pool = getPool('practice');
  return pool[Math.floor(Math.random()*pool.length)];
}
