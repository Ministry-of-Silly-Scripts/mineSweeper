# Backlog

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR

## US 1 - Square Creation

As a player, I want each `Square` of the board to have show me its states (revealed, not revealed, bomb, flagged), so that I can see different scenarios in the Mine Sweeper game

- ✅ UAT 1.1: Initialize (not revelead)

  - GIVEN a square
  - WHEN it is initialized,
  - THEN it should be not revealed

- ✅ UAT 1.2: Initialize (not bomb)

  - GIVEN a square
  - WHEN it is initialized,
  - THEN it should be not be a bomb

- ✅ UAT 1.3: Mark square

  - GIVEN a square
  - WHEN it is marked
  - THEN it should be revealed

- ✅ UAT 1.4: Show square is not revealed

  - GIVEN a square
  - WHEN it is not revealed,
  - THEN it should return ' '

- ✅ UAT 1.5: Show square (not a bomb and revealed)

  - GIVEN a square
  - WHEN it is revealed and it is not a bomb,
  - THEN it should return '\_'

- ✅ UAT 1.6: Show square (bomb)

  - GIVEN a square
  - WHEN it is a bomb,
  - THEN it should return 'X'

- ✅ UAT 1.7: Number of bombs in neightbourhood

  - GIVEN a square
  - WHEN it has 3 bombs in the neighbourhood,
  - THEN it should have 3 bombs in the neighbourhood

- ✅ UAT 1.8: Show square (revealed and neighbourd bombs > 0)

  - GIVEN a square
  - WHEN it has 3 bombs in the neighbourhood and is revealed,
  - THEN it should return '3'

## US 2 - Board Creation

As a player, I want to start a new game board so that I can play on a new `Board`.

- ✅ UAT 2.1: Initialize board

  - GIVEN the game starts
  - WHEN the board is initialized
  - THEN a grid with size NxN should be created

- ✅ UAT 2.2: Board should have all squares unopened upon initialization

  - GIVEN the game starts
  - WHEN the board is initialized
  - THEN all cells of the grid should be unopened

- ✅ UAT 2.3: Board should show all squares states when printed

  - GIVEN a game
  - WHEN the player views the board
  - THEN all squares states should be visible

- ✅ UAT 2.4: Board should randomly places bombs in squares

  - GIVEN the game starts
  - WHEN the board is initialized
  - THEN it should have N squares with bombs

- ✅ UAT 2.5: Board should update the number os bombs in the neighbourhood a square after placing the bombs

  - GIVEN the game starts
  - WHEN the bombs are placed in the board
  - THEN it should update the number of bombs in the neighbourhood

- ✅ UAT 2.6: Board should update the revealed status of a square when it is marked

  - GIVEN the initiated board
  - WHEN the player marks a square
  - THEN it should update the square status to revealed

- ✅ UAT 2.7: Board should reveal all squares with no neighbours when one with zero bombs in the neighbourhood is marked

  - GIVEN the initiated board
  - WHEN the player marks a square with no bombs in neighbourhood
  - THEN it should update all the squares in the neighbourhood with zero bombs to revealed recursively

## US 3 - Game Creation

As a player, I want to start a new game so that I can play it.

- ✅ UAT 3.1: Initialize game

  - GIVEN the game
  - WHEN it starts
  - THEN it shows a board in console.log
