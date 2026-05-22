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
- $(System.Collections.Specialized.OrderedDictionary.name): "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation." [_company/_shared/vendor/obra-superpowers/skills/brainstorming/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions [_company/_shared/vendor/obra-superpowers/skills/using-superpowers/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): 'Explore requirements and approaches through collaborative dialogue, then write a right-sized requirements document. Use when the user says "let''s brainstorm", "what should we build", or "help me think through X", presents a vague or ambitious feature request, or seems unsure about scope or direction -- even without explicitly asking to brainstorm.' [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-brainstorm/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Summarize recent compound-engineering plugin releases, or answer a specific question about a past release with a version citation. Use when the user types `/ce-release-notes` or asks "what changed in compound-engineering recently?" or "what happened to `<skill-name>`?". [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-release-notes/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
