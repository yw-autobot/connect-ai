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
- $(System.Collections.Specialized.OrderedDictionary.name): Use when you have a spec or requirements for a multi-step task, before touching code [_company/_shared/vendor/obra-superpowers/skills/writing-plans/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when completing tasks, implementing major features, or before merging to verify work meets requirements [_company/_shared/vendor/obra-superpowers/skills/requesting-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation [_company/_shared/vendor/obra-superpowers/skills/receiving-code-review/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always [_company/_shared/vendor/obra-superpowers/skills/verification-before-completion/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): "Build and test iOS apps on simulator using XcodeBuildMCP. Use after making iOS code changes, before creating a PR, or when verifying app behavior and checking for crashes on simulator." [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-test-xcode/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Run comprehensive agent-native architecture review with scored principles [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-agent-native-audit/SKILL.md]
- $(System.Collections.Specialized.OrderedDictionary.name): Document a recently solved problem to compound your team's knowledge [_company/_shared/vendor/compound-engineering-plugin/plugins/compound-engineering/skills/ce-compound/SKILL.md]

## Required closeout habit
- At the end of any implementation/review cycle, ask: what mistake, surprise, repeated friction, or useful pattern should be compounded?
- If there is a reusable lesson, write/update a concise learning note under `_company/_shared/compound_lessons/` or mention it in the final report for CEO/Secretary to store.
