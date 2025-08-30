const PUZZLES = [
 {id:'d-001',mode:'daily',title:'Daily #1',size:4,
  grid:[['C','A','K','E'],['A','R','I','A'],['K','I','T','E'],['E','A','S','Y']],
  across:[{num:1,row:0,col:0,answer:'CAKE',clue:'Birthday dessert'}],
  down:[{num:1,row:0,col:0,answer:'CITE',clue:'Reference'}]
 },
 {id:'p-001',mode:'practice',title:'Practice #1',size:4,
  grid:[['B','A','L','L'],['A','R','E','A'],['L','E','A','D'],['L','A','D','Y']],
  across:[{num:1,row:0,col:0,answer:'BALL',clue:'Toy to toss'}],
  down:[{num:1,row:0,col:0,answer:'BARD',clue:'Poet'}]
 }
];
function getPool(m){return PUZZLES.filter(p=>p.mode===m)}
function getDailyPuzzle(){const d=Math.floor(Date.now()/86400000);const pool=getPool('daily');return pool[d%pool.length]}
function getPracticePuzzle(){const pool=getPool('practice');return pool[Math.floor(Math.random()*pool.length)]}
