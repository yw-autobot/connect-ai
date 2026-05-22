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
- $(System.Collections.Specialized.OrderedDictionary.name): "Create or maintain STRATEGY.md - the product's target problem, approach, users, key metrics, and tracks of work. Use when starting a new product, updating direction, or when prompts like 'write our strategy', 'update the roadmap', 'what are we working on', or 'set up the strategy doc' come up. Also triggers when ce-ideate, ce-brainstorm, or ce-plan need upstream grounding and no strategy doc exists yet." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-strategy/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "Generate a time-windowed pulse report on what users experienced and how the product performed - usage, quality, errors, signals worth investigating. Use when the user says 'run a pulse', 'show me the pulse', 'how are we doing', 'weekly recap', 'launch-day check', or passes a time window like '24h' or '7d'. Configures via .compound-engineering/config.local.yaml and saves reports to docs/pulse-reports/." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-product-pulse/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): 'Explore requirements and approaches through collaborative dialogue, then write a right-sized requirements document. Use when the user says "let''s brainstorm", "what should we build", or "help me think through X", presents a vague or ambitious feature request, or seems unsure about scope or direction -- even without explicitly asking to brainstorm.' [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-brainstorm/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
