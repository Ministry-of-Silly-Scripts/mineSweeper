# Notes

## Description

### Mine Sweeper - Game Rules:

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any bombs) you win.

Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. If you guess a square contains a bomb mark it with a flag.

A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.

The first square you open could be a bomb.

You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

### UAT Scenarios:

1 – Game Board Creation phase:

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] Game created
```

2 – Game Over - Step on a bomb on 1;1

```
+-+-+-+
| | | |
+-+-+-+
| |X| |
+-+-+-+
| | | |
+-+-+-+
[Sandbox 3x3] BOOM! – Game Over.
```

3 – Clean square 0;0 and get the number of bombs around

```
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|3| | |
+-+-+-+
[Sandbox 3x3] 3 bombs around your square.
```

4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1].

```
+-+-+-+
| | | |
+-+-+-+
|_|_| |
+-+-+-+
|3|_| |
+-+-+-+
[Sandbox 3x3] Square flagged as bomb.
```

5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]

```
+-+-+-+
|2|2|1|
+-+-+-+
|_|_|2|
+-+-+-+
|3|_|2|
+-+-+-+
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

6 – Massive cleaning and victory clicking on 0;0

```
+-+-+-+
|_|1| |
+-+-+-+
|_|1|1|
+-+-+-+
|_|_|_|
+-+-+-+
[Sandbox 3x3] the land is cleared! GOOD JOB!
```

Kata Objective:

The game runs in BOT mode to print on the screen all the moves until we got a victory or game over. The test suite can simulate the game without having an executable. In that case the test suite will print on console the scenario; or in a log file with a clean test report [red/green style].

## Domain

**Entities**:

- `Board`
  - contains a grid of `Square`
- `Square`:
  - can have a bomb
  - can be revealed and not flagged
  - can be revealed and flagged
  - stores the number of bombs in its neighbourhood
- `Neighbour`
  - adjacent `Square` of the selected `Square`
- `Player`
  - can select a `Square`
  - can `Flag` a `Square`
- `Game`
  - can have 2 states:
    - `RUNNING`
    - `FINISHED`

## Rules

- Initialize a board of squares
- Some square contains mines (bombs), others don't
- Square neighbours:
  - all adjacent squares: above, below, left, right, diagonals
  - side or corners: fewer neighbours
- If a player step on a square WITH a bomb
  - Loses
- If a player step on a square WITHOUT a bomb:
  - Reveals the number of neighbouring squares containg bombs
  - Square with 0 neighbouring bombs: all its neighbors will automatically open (recursively)
- Win:
  - open all non-bombs squares
  - not all bombs needs to be flagged

## Assumptions

- Board size in number of squares:
  - height == width == side
  - 3 x 3
- Total number of bombs on the board: number of squares on the side

## Examples

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR

### Pomodoro 1 🍅:

- ✅ initial setup

  - update README
  - update NOTES
  - update package.json
  - update code/test files

- ✅ Domain, rules and assumptions

- US 1: Square definitions
  - ✅ UAT 1.1: Initialized (not revelead)
  - ✅ UAT 1.2: Initialized (not bomb)
  - 🚧 UAT 1.3: Mark square (not bomb)
  - 🚧 UAT 1.4: Mark square (bomb)
  - 🚧 UAT 1.5: Show square (not a bomb and not revealed)
  - 🚧 UAT 1.6: Show square (not a bomb and revealed)
  - 🚧 UAT 1.7: Show square (bomb)

### Pomodoro 2 🍅:

- US 1: Square definitions
  - ✅ UAT 1.3: Mark square
  - ✅ UAT 1.4: Show square not revealed
  - ✅ UAT 1.5: Show square (not a bomb and revealed)
  - ✅ UAT 1.6: Show square (bomb)

### Pomodoro 3 🍅:

- US 2: Board definitions
  - ✅ UAT 2.1: Initialize board
  - ✅ UAT 2.2: Board should have all squares unopened upon initialization
  - ✅ UAT 2.3: Board should show all squares' states when printed
  - 🚧 UAT 2.4: Board should have N squares with bombs

### Pomodoro 4 🍅:

- ✅ UAT 2.4: Board should have N squares with bombs
- ✅ UAT 1.7: Number of bombs in neighbourhood
