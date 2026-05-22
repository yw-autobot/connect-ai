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
- $(System.Collections.Specialized.OrderedDictionary.name): "Generate and critically evaluate grounded ideas about a topic. Use when asking what to improve, requesting idea generation, exploring surprising directions, or wanting the AI to proactively suggest strong options before brainstorming one in depth. Triggers on phrases like 'what should I improve', 'give me ideas', 'ideate on X', 'surprise me', 'what would you change', or any request for AI-generated suggestions rather than refining the user's own idea." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-ideate/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): 'Build web interfaces with genuine design quality, not AI slop. Use for any frontend work - landing pages, web apps, dashboards, admin panels, components, interactive experiences. Activates for both greenfield builds and modifications to existing applications. Detects existing design systems and respects them. Covers composition, typography, color, motion, and copy. Verifies results via screenshots before declaring done.' [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-frontend-design/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
