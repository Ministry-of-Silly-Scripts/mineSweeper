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

## Rules

## Examples

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR

### Pomodoro 1 🍅:

- initial setup
  - update README
  - update NOTES
  - update package.json
  - update code/test files
