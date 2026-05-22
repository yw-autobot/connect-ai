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
- $(System.Collections.Specialized.OrderedDictionary.name): Use when completing tasks, implementing major features, or before merging to verify work meets requirements [_company/_shared/vendor/obra-superpowers/skills/requesting-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation [_company/_shared/vendor/obra-superpowers/skills/receiving-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always [_company/_shared/vendor/obra-superpowers/skills/verification-before-completion/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes [_company/_shared/vendor/obra-superpowers/skills/systematic-debugging/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "Structured code review using tiered persona agents, confidence-gated findings, and a merge/dedup pipeline. Use when reviewing code changes before creating a PR." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Review requirements or plan documents using parallel persona agents that surface role-specific issues. Use when a requirements document or plan document exists and the user wants to improve it. [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-doc-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Run human-in-the-loop review loops over markdown via Proof (proofeditor.ai) — share, view, comment on, edit, and sync collaborative docs. Use when the user says "view this in proof", "share to proof", "HITL this doc", or wants a shared markdown review surface for a spec, plan, or draft, including handoffs from ce-brainstorm, ce-ideate, or ce-plan. Do not trigger on "proof" meaning evidence, math proofs, proof-of-concept, or "proofread this". [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-proof/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Run comprehensive agent-native architecture review with scored principles [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-agent-native-audit/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
