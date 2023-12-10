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

- UAT 1.3: Mark square

  - GIVEN a square
  - WHEN it is marked
  - THEN it should be revealed

- UAT 1.4: Show square (not a bomb and not revealed)

  - GIVEN a square
  - WHEN it is not revealed and it is not a bomb,
  - THEN it should return ' '

- UAT 1.5: Show square (not a bomb and revealed)

  - GIVEN a square
  - WHEN it is revealed and it is not a bomb,
  - THEN it should return '\_'

- UAT 1.6: Show square (bomb)

  - GIVEN a square
  - WHEN it is a bomb,
  - THEN it should return 'X'
