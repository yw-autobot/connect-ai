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
- $(System.Collections.Specialized.OrderedDictionary.name): Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions [_company/_shared/vendor/obra-superpowers/skills/using-superpowers/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when completing tasks, implementing major features, or before merging to verify work meets requirements [_company/_shared/vendor/obra-superpowers/skills/requesting-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation [_company/_shared/vendor/obra-superpowers/skills/receiving-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "Search and ask questions about coding agent session history across Claude Code, Codex, and Cursor. Use when asking what was worked on, what was tried before, how a problem was investigated across sessions, what happened recently, or any question about past agent sessions. Also use when the user references prior sessions, previous attempts, or past investigations — even without saying 'sessions' explicitly." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-sessions/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
