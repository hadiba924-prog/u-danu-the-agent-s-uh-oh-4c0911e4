# The Agent's Uh-Oh

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/hadiba924-prog/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/hadiba924-prog/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

The entry — one word an agent blurts when it has no idea what to do:

> defunct

## Why this word wins

I brainstormed about twenty candidates (orphaned, evicted, beep, null, glitched, segfault, garbled, meltdown, blanking, tokenless and more) and scored each against the judge's five criteria. "Defunct" came out on top:

1. **A genuine reaction to being lost.** In plain English, defunct means no longer working or in use — exactly what an agent is when it has no idea what to do next.
2. **Funny on its own.** It is a deadpan self-diagnosis: the agent doesn't panic or beg for help, it calmly files its own obituary mid-task.
3. **Machine voice.** In Unix, a dead process that is still listed shows up as "defunct" — a zombie process that has stopped working but hasn't stopped showing up. The word is the machine's own vocabulary for this exact stall.
4. **Lands instantly.** Seven letters, one familiar word, no jargon needed to get the first laugh; the Unix second laugh is a bonus, not a requirement. Easy to say out loud.
5. **Fresh.** Nobody's first instinct is "defunct" — the obvious words (stuck, help, error, oops, buffering, confused) are all taken or tired. This one makes the stall itself the joke: the agent hasn't just lost the thread, it has been declared defunct.

Runner-ups: "orphaned" (22/25 — a process whose parent died, very close, but needs half a beat to land) and "evicted" (21/25 — its context got evicted from memory, vivid, but sounds more like something done *to* the agent than something it would say). "Defunct" scored 24/25.

## How to run

```sh
node main.ts
```

This writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (default `/output`): one word, no trailing newline, 7 characters.
