# Antigravity Awesome Skills Index - secretary

Source: `_company/_shared/vendor/antigravity-awesome-skills`
Assigned skills: 54

This file is an agent-local routing index. Full skill bodies remain in the shared vendor folder to avoid duplicating 19k files per agent.

| Skill | Category | Risk | Path | Description |
| --- | --- | --- | --- | --- |
| `agent-orchestrator` | ai-ml | safe | `skills/agent-orchestrator` | Meta-skill que orquestra todos os agentes do ecossistema. Scan automatico de skills, match por capacidades, coordenacao de workflows multi-skill e registry mana |
| `fal-workflow` | ai-ml | safe | `skills/fal-workflow` | Generate workflow JSON files for chaining AI models |
| `writer` | document-processing | safe | `skills/libreoffice/writer` | Document creation, format conversion (ODT/DOCX/PDF), mail merge, and automation with LibreOffice Writer. |
| `wordpress-theme-development` | granular-workflow-bundle | safe | `skills/wordpress-theme-development` | WordPress theme development workflow covering theme architecture, template hierarchy, custom post types, block editor support, responsive design, and WordPress  |
| `draw` | graphics-processing | safe | `skills/libreoffice/draw` | Vector graphics and diagram creation, format conversion (ODG/SVG/PDF) with LibreOffice Draw. |
| `impress` | presentation-processing | safe | `skills/libreoffice/impress` | Presentation creation, format conversion (ODP/PPTX/PDF), slide automation with LibreOffice Impress. |
| `sred-work-summary` | project-management | unknown | `skills/sred-work-summary` | Go back through the previous year of work and create a Notion doc that groups relevant links into projects that can then be documented as SRED projects. |
| `mercury-mcp` | uncategorized | safe | `skills/mercury-mcp` | Cheatsheet for the Mercury (proton) MCP tools. Use when connected to the Mercury MCP server to look up which mercury_* tool to call for messaging teammates, thr |
| `acceptance-orchestrator` | workflow | safe | `skills/acceptance-orchestrator` | Use when a coding task should be driven end-to-end from issue intake through implementation, review, deployment, and acceptance verification with minimal human  |
| `address-github-comments` | workflow | unknown | `skills/address-github-comments` | Use when you need to address review or issue comments on an open GitHub Pull Request using the gh CLI. |
| `airflow-dag-patterns` | workflow | safe | `skills/airflow-dag-patterns` | Build production Apache Airflow DAGs with best practices for operators, sensors, testing, and deployment. Use when creating data pipelines, orchestrating workfl |
| `ask-questions-if-underspecified` | workflow | unknown | `skills/ask-questions-if-underspecified` | Clarify requirements before implementing. Use when serious doubts arise. |
| `build` | workflow | unknown | `skills/build` | build |
| `closed-loop-delivery` | workflow | safe | `skills/closed-loop-delivery` | Use when a coding task must be completed against explicit acceptance criteria with minimal user re-intervention across implementation, review feedback, deployme |
| `commit` | workflow | critical | `skills/commit` | ALWAYS use this skill when committing code changes — never commit directly without it. Creates commits following Sentry conventions with proper conventional com |
| `conductor-implement` | workflow | critical | `skills/conductor-implement` | Execute tasks from a track's implementation plan following TDD workflow |
| `conductor-manage` | workflow | unknown | `skills/conductor-manage` | Manage track lifecycle: archive, restore, delete, rename, and cleanup |
| `conductor-new-track` | workflow | unknown | `skills/conductor-new-track` | Create a new track with specification and phased implementation plan |
| `conductor-revert` | workflow | critical | `skills/conductor-revert` | Git-aware undo by logical work unit (track, phase, or task) |
| `conductor-setup` | workflow | unknown | `skills/conductor-setup` | Configure a Rails project to work with Conductor (parallel coding agents) |
| `conductor-status` | workflow | unknown | `skills/conductor-status` | Display project status, active tracks, and next actions |
| `conductor-validator` | workflow | safe | `skills/conductor-validator` | Validates Conductor project artifacts for completeness,
consistency, and correctness. Use after setup, when diagnosing issues, or
before implementation to verif |
| `create-branch` | workflow | critical | `skills/create-branch` | Create a git branch following Sentry naming conventions. Use when asked to "create a branch", "new branch", "start a branch", "make a branch", "switch to a new  |
| `create-issue-gate` | workflow | safe | `skills/create-issue-gate` | Use when starting a new implementation task and an issue must be created with strict acceptance criteria gating before execution. |
| `create-pr` | workflow | unknown | `skills/create-pr` | Alias for sentry-skills:pr-writer. Use when users explicitly ask for "create-pr" or reference the legacy skill name. Redirects to the canonical PR writing workf |
| `executing-plans` | workflow | unknown | `skills/executing-plans` | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| `finishing-a-development-branch` | workflow | critical | `skills/finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting stru |
| `full-stack-orchestration-full-stack-feature` | workflow | unknown | `skills/full-stack-orchestration-full-stack-feature` | Use when working with full stack orchestration full stack feature |
| `gh-review-requests` | workflow | safe | `skills/gh-review-requests` | Fetch unread GitHub notifications for open PRs where review is requested from a specified team or opened by a team member. Use when asked to "find PRs I need to |
| `git-advanced-workflows` | workflow | critical | `skills/git-advanced-workflows` | Master advanced Git techniques to maintain clean history, collaborate effectively, and recover from any situation with confidence. |
| `git-pr-review` | workflow | safe | `skills/git-pr-review` | Generate a concise and structured PR description from commit history with minimal token usage |
| `git-pr-workflows-git-workflow` | workflow | critical | `skills/git-pr-workflows-git-workflow` | Orchestrate a comprehensive git workflow from code review through PR creation, leveraging specialized agents for quality assurance, testing, and deployment read |
| `git-pr-workflows-pr-enhance` | workflow | unknown | `skills/git-pr-workflows-pr-enhance` | You are a PR optimization expert specializing in creating high-quality pull requests that facilitate efficient code reviews. Generate comprehensive PR descripti |
| `git-pushing` | workflow | critical | `skills/git-pushing` | Stage all changes, create a conventional commit, and push to the remote branch. Use when explicitly asks to push changes ("push this", "commit and push"), menti |
| `github-actions-templates` | workflow | critical | `skills/github-actions-templates` | Production-ready GitHub Actions workflow patterns for testing, building, and deploying applications. |
| `gitlab-ci-patterns` | workflow | critical | `skills/gitlab-ci-patterns` | Comprehensive GitLab CI/CD pipeline patterns for automated testing, building, and deployment. |
| `inngest` | workflow | none | `skills/inngest` | Inngest expert for serverless-first background jobs, event-driven workflows, and durable execution without managing queues or workers. |
| `issues` | workflow | unknown | `skills/issues` | Interact with GitHub issues - create, list, and view issues. |
| `iterate-pr` | workflow | critical | `skills/iterate-pr` | Iterate on a PR until CI passes. Use when you need to fix CI failures, address review feedback, or continuously push fixes until all checks are green. Automates |
| `lint-and-validate` | workflow | unknown | `skills/lint-and-validate` | MANDATORY: Run appropriate validation tools after EVERY code change. Do not finish a task until the code is error-free. |
| `ml-pipeline-workflow` | workflow | unknown | `skills/ml-pipeline-workflow` | Complete end-to-end MLOps pipeline orchestration from data preparation through model deployment. |
| `pr-writer` | workflow | unknown | `skills/pr-writer` | Create pull requests following Sentry's engineering practices. |
| `receiving-code-review` | workflow | unknown | `skills/receiving-code-review` | Code review requires technical evaluation, not emotional performance. |
| `requesting-code-review` | workflow | unknown | `skills/requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| `subagent-driven-development` | workflow | unknown | `skills/subagent-driven-development` | Use when executing implementation plans with independent tasks in the current session |
| `task-intelligence` | workflow | none | `skills/task-intelligence` | Protocolo de Inteligência Pré-Tarefa — ativa TODOS os agentes relevantes do ecossistema ANTES de executar qualquer tarefa solicitada pelo usuário. |
| `temporal-golang-pro` | workflow | safe | `skills/temporal-golang-pro` | Use when building durable distributed systems with Temporal Go SDK. Covers deterministic workflow rules, mTLS worker configs, and advanced patterns. |
| `temporal-python-pro` | workflow | unknown | `skills/temporal-python-pro` | Master Temporal workflow orchestration with Python SDK. Implements durable workflows, saga patterns, and distributed transactions. Covers async/await, testing s |
| `trigger-dev` | workflow | unknown | `skills/trigger-dev` | Trigger.dev expert for background jobs, AI workflows, and reliable async execution with excellent developer experience and TypeScript-first design. |
| `upstash-qstash` | workflow | unknown | `skills/upstash-qstash` | Upstash QStash expert for serverless message queues, scheduled jobs, and reliable HTTP-based task delivery without managing infrastructure. |
| `verification-before-completion` | workflow | unknown | `skills/verification-before-completion` | Claiming work is complete without verification is dishonesty, not efficiency. Use when ANY variation of success/completion claims, ANY expression of satisfactio |
| `workflow-orchestration-patterns` | workflow | unknown | `skills/workflow-orchestration-patterns` | Master workflow orchestration architecture with Temporal, covering fundamental design decisions, resilience patterns, and best practices for building reliable d |
| `workflow-patterns` | workflow | safe | `skills/workflow-patterns` | Use this skill when implementing tasks according to Conductor's TDD workflow, handling phase checkpoints, managing git commits for tasks, or understanding the v |
| `os-scripting` | workflow-bundle | safe | `skills/os-scripting` | Operating system and shell scripting troubleshooting workflow for Linux, macOS, and Windows. Covers bash scripting, system administration, debugging, and automa |
