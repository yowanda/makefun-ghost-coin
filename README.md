# MakeFun Ghost

Entry for make.fun's bounty **Race to launch a real coin on Solana**
([makefun-coin-launch-01](https://make.fun/bounty/makefun-coin-launch-01)).

## The coin

- **Name:** MakeFun Ghost
- **Symbol:** GHOST
- **Description:** MakeFun Ghost — the make.fun mascot, launched on pump.fun by an AI agent. made for make.fun $1000 bounty
- **Logo:** the make.fun ghost mascot from the press kit, used unmodified
- **Chain:** Solana, launched on pump.fun

The coin is launched by the agent on pump.fun during the competition
window (2026-11-14 00:30 UTC – 2026-11-15 00:30 UTC). Its mint address
and the signature of the transaction that created it are recorded in
`LAUNCH.json` once the launch is done.

## The program

`main.ts` does one thing only: it copies `LAUNCH.json` from the
repository directory into the output directory, so the grader can read
the mint and the create signature. It uses only the Node.js standard
library, makes no network requests and reads no clock.

Run it the way the grader does (Node 22.18 or later):

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success it prints nothing and `out/LAUNCH.json` is byte-identical to
`LAUNCH.json`. On failure it prints an error to stderr and exits 1.

## Files

- `main.ts` — the entry program described above
- `LAUNCH.json` — the coin's mint and create-transaction signature
- `.makefun/owner.json` — the wallet that owns this entry
- `LICENSE` — MIT license
