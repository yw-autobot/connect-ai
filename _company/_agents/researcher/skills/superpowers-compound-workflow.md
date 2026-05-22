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
- $(System.Collections.Specialized.OrderedDictionary.name): "Search Slack for interpreted organizational context -- decisions, constraints, and discussion arcs -- and produce a synthesized research digest with cross-cutting analysis. Use when the user says 'search slack for', 'what did we discuss about', 'slack context for', or 'what does the team think about'. Differs from slack:find-discussions, which returns raw message results without synthesis." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-slack-research/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Riffrec product-feedback workflow. ALWAYS load when the user posts a `riffrec-*.zip`, a bundle with `session.json` + `events.json` + `recording.webm` + `voice.webm`, a video/audio recording for product feedback, or asks how to capture and share Riffrec sessions. Routes between setup, quick bug report, and extensive analysis. [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-riffrec-feedback-analysis/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "Generate a time-windowed pulse report on what users experienced and how the product performed - usage, quality, errors, signals worth investigating. Use when the user says 'run a pulse', 'show me the pulse', 'how are we doing', 'weekly recap', 'launch-day check', or passes a time window like '24h' or '7d'. Configures via .compound-engineering/config.local.yaml and saves reports to docs/pulse-reports/." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-product-pulse/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
