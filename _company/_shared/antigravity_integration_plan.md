# Antigravity Awesome Skills Integration Plan

Source: https://github.com/sickn33/antigravity-awesome-skills.git

Snapshot reviewed locally:
`C:\Users\2yw92\AppData\Local\Temp\antigravity-awesome-skills-1d4c6e140ca74569b66023da6df20a42`

## Current ConnectAI Lab Structure

- Agent registry: `src/agents.ts`
- Runtime agent folders: `_company/_agents/<agent_id>/`
- Per-agent reusable skills: `_company/_agents/<agent_id>/skills/*.md`
- Per-agent executable tools: `_company/_agents/<agent_id>/tools/*.{py,json,md}`
- Tool catalog and seed logic: `src/extension.ts`

The safest integration path is not a full merge. The upstream repository has 1,464 indexed skills and many of them are overlapping, experimental, provider-specific, or high-risk. ConnectAI Lab should first use curated per-agent skill references, then selectively vendor or rewrite executable tools.

## Recommended Strategy

1. Keep upstream as an external source of truth.
2. Add concise curated skill files under each existing agent's `skills/` folder.
3. Promote only frequently used skills into local first-class tools.
4. Add new agents only when a skill family needs its own dashboard, memory, autonomy level, and tool permissions.

## Existing Agent Skill Mapping

| Agent | Best matching upstream skills |
|---|---|
| ceo | `agent-orchestrator`, `antigravity-skill-orchestrator`, `architecture`, `blueprint`, `agent-evaluation` |
| developer | `senior-frontend`, `react-best-practices`, `mcp-tool-developer`, `mcp-builder-ms`, `github-automation`, `acceptance-orchestrator` |
| designer | `ui-setup`, `product-design`, `ui-ux-designer`, `ui-visual-validator`, `accessibility-compliance-accessibility-audit`, `imagen` |
| writer | `copywriting`, `seo-aeo-blog-writer`, `wordpress-centric-high-seo-optimized-blogwriting-skill`, `documentation`, `brand-guidelines` |
| researcher | `deep-research`, `web-scraper`, `wiki-researcher`, `tavily-web`, `xvary-stock-research` |
| business | `revops`, `micro-saas-launcher`, `pricing-strategy`, `business-analyst`, `marketing-ideas`, `product-marketing-context` |
| youtube | `youtube-summarizer`, `ingest-youtube`, `seek-and-analyze-video`, `content-creator`, `seo-aeo-content-cluster` |
| instagram | `social-post-writer-seo`, `social-content`, `instagram`, `xiaohongshu-content-strategist`, `screenshots` |
| secretary | `telegram-automation`, `outlook-automation`, `outlook-calendar-automation`, `notion-automation`, `microsoft-teams-automation` |
| editor | `videodb`, `videodb-skills`, `audio-transcriber`, `remotion-best-practices`, `game-audio`, `voice-ai-development` |

## Good New Agent Candidates

These are worth adding as real ConnectAI agents later, because they represent broad responsibility areas rather than one-off skills.

| Proposed agent | Why it deserves a separate agent | Upstream skill families |
|---|---|---|
| security | Security work needs stricter autonomy, audit memory, and approval gates. It is enabled as read-only by default. | `007`, `api-security-best-practices`, `active-directory-attacks`, `malware-analyst`, security category |
| devops | Deployment, cloud, CI, infra, and reliability are too broad for the current developer agent. | cloud, devops, reliability, GitHub Actions, Docker/Kubernetes skills |
| data | Data analysis, scraping, BI, spreadsheets, and dashboard reporting can serve CEO/business/researcher. | data, analytics, Snowflake, BigQuery, scraping, visualization |
| product | Product strategy, PRDs, roadmaps, launch planning, and customer discovery can bridge CEO/business/designer/developer. | product, ai-product, product-marketing-context, micro-saas-launcher |
| automation | MCP/Rube/Zapier-like workflow and API automation can own integrations across tools. | automation, api-integration, mcp, workflow skills |
| mobile | Android/iOS/Expo skills are numerous enough to justify a specialist. | mobile, android, iOS, React Native, Expo |

## Fork/Merge Recommendation

Do not directly merge the full upstream repository into this plugin. Prefer one of these:

- `vendor/antigravity-awesome-skills/` via submodule or subtree if you want local offline access.
- `_company/_shared/antigravity_skill_index.json` if you only need search and routing.
- Selective copies into `_company/_agents/<id>/skills/` for prompt-level guidance.
- Selective rewrites into `_company/_agents/<id>/tools/` only after reviewing credentials, risk, dependencies, and license.

## Risk Notes

- Skills marked `critical`, `offensive`, or provider-specific should not be auto-enabled as executable tools.
- Rube/Composio automation skills require external connections and live schemas, so they should remain guidance until ConnectAI Lab has matching MCP/tool support.
- Full skill content can be large. Injecting many full upstream `SKILL.md` files directly into agent prompts will bloat context.
- Current best move: curated references now, selective toolization later.

## Implemented Next Step

- Added six new ConnectAI agents: `security`, `devops`, `data`, `product`, `automation`, and `mobile`.
- Added per-agent runtime folders, goals, prompts, memories, tool manifests, and curated upstream skill references.
- Added `security_guardrails.md` and resolved the root `.gitignore` conflict markers.
- Protected `_company/_agents/*/config.md` and `_company/_agents/*/tools/*.json` in root `.gitignore` as a defense-in-depth layer.
- Kept all new executable tools as roadmap/planned only. No imported upstream tool is auto-executable yet.
