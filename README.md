# Mini Crossword — Fixed (Daily & Practice)
- Buttons wired to load Daily (seeded by days since epoch) and Practice (random from pool).
- Blocks supported via `blocks: [{row,col}]` and `'#'` in `grid`.
- Local leaderboard per puzzle id.
- iOS-friendly inputs (no zoom).

To add puzzles: edit `puzzles.js`. If you want *no repeated answers across vs down*, use blocks or design a non-symmetric letter matrix.
