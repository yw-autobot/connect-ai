# Superpowers + Compound Engineering Workflow

Source repositories:
- https://github.com/obra/superpowers.git
- https://github.com/EveryInc/compound-engineering-plugin.git

## When the user assigns work
- Before coding/execution, check whether the task needs brainstorming, planning, debugging, TDD, code review, verification, or compounding.
- Use Superpowers flow as the operating method: clarify -> plan -> execute in small steps -> verify -> request/receive review -> finish safely.
- Use Compound Engineering after a review, fix, bug investigation, or repeated mistake: capture the lesson, root cause, fix, verification, and prevention rule so the next task is easier.
- Do not claim completion without fresh verification evidence. Do not perform risky deploy/send/delete/payment actions without approval gates.

## Assigned skills for this agent
- $(System.Collections.Specialized.OrderedDictionary.name): Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback [_company/_shared/vendor/obra-superpowers/skills/using-git-worktrees/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always [_company/_shared/vendor/obra-superpowers/skills/verification-before-completion/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup [_company/_shared/vendor/obra-superpowers/skills/finishing-a-development-branch/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes [_company/_shared/vendor/obra-superpowers/skills/systematic-debugging/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Create an isolated git worktree for parallel feature work or PR review. Use when starting work that should not disturb the current checkout, or when `ce-work` or `ce-code-review` offers a worktree option. [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-worktree/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Run browser tests on pages affected by current PR or branch [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-test-browser/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Run human-in-the-loop review loops over markdown via Proof (proofeditor.ai) — share, view, comment on, edit, and sync collaborative docs. Use when the user says "view this in proof", "share to proof", "HITL this doc", or wants a shared markdown review surface for a spec, plan, or draft, including handoffs from ce-brainstorm, ce-ideate, or ce-plan. Do not trigger on "proof" meaning evidence, math proofs, proof-of-concept, or "proofread this". [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-proof/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Commit, push, and open a PR with an adaptive, value-first description that scales in depth with the change. Use when the user says "commit and PR", "ship this", "create a PR", or "open a pull request". Also handles description-only flows ("write a PR description", "rewrite the PR body", "describe this PR") without committing or pushing. [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-commit-push-pr/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Summarize recent compound-engineering plugin releases, or answer a specific question about a past release with a version citation. Use when the user types `/ce-release-notes` or asks "what changed in compound-engineering recently?" or "what happened to `<skill-name>`?". [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-release-notes/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
