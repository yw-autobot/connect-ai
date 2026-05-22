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
- $(System.Collections.Specialized.OrderedDictionary.name): "Capture a visual demo reel (GIF, terminal recording, screenshots) for PR descriptions. Use when shipping UI changes, CLI features, or any work with observable behavior that benefits from visual proof. Also use when asked to add a demo, record a GIF, screenshot a feature, show what changed visually, create a demo reel, capture evidence, add proof to a PR, or create a before/after comparison." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-demo-reel/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "[BETA] Start the dev server, open the feature in a browser, and iterate on improvements together." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-polish-beta/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always [_company/_shared/vendor/obra-superpowers/skills/verification-before-completion/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
