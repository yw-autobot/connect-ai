# ConnectAI Agent Security Guardrails

This file applies to all agents, especially skills imported or referenced from external repositories.

## Default Policy

- Keep externally sourced skills as guidance until reviewed, then enable them through a local safety wrapper.
- Do not auto-enable skills marked `critical`, `offensive`, `malware`, `exploit`, `attack`, or provider-specific live automation.
- Treat send, publish, deploy, delete, payment, permission, credential, and account actions as approval-gated.
- Prefer read-only analysis for first integration of any upstream skill.
- Store secrets only in gitignored config files, never in `skills/*.md`, `memory.md`, `prompt.md`, or committed docs.
- Any new executable tool must include a `.md` usage note, `.json` config schema, dry-run behavior, approval policy, and safe failure behavior.

## Review Checklist Before Tool Promotion

- License and source are acceptable.
- Dependencies are pinned or documented.
- Network calls are explicit and optional.
- Credentials are loaded from config files or environment variables, not hardcoded.
- The tool logs external actions to `_agents/<id>/activity.log`.
- The tool refuses destructive or external write actions unless an approval token or manual confirmation exists.
- The tool has a dry-run mode when possible.

## Risk Labels

- `safe`: prompt guidance, read-only local analysis, or no external side effects.
- `review`: may read external data or require credentials.
- `gated`: can write, publish, send, deploy, delete, or change permissions; approval required.
- `blocked`: offensive, destructive, unclear provenance, or too broad to run safely.
