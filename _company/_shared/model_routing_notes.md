# Agent Model Routing

Updated: 2026-05-22T13:37:53.9873255+09:00

## Policy

- `qwen/qwen3.5-4b`: primary reasoning, coding, security, data, product, automation, research, writing, and business model. Installed in LM Studio as Q4_K_M GGUF and loaded with 32k context. This is the stable default after the 9B variant timed out during local chat testing.
- `google/gemma-4-e4b`: retained for visual/social/design tasks where the existing local model is already stable.
- `google/gemma-4-e2b`: fast orchestration/admin routing for CEO and Secretary to keep the UI responsive.

## Hardware note

This PC has about 32GB RAM and RTX 3070 Ti. Qwen3.5 9B is installed but left unloaded by default because local chat testing timed out. Qwen3.6 35B-A3B is not selected as the default because 35B GGUF variants are much heavier and less stable for multi-agent use on this machine.
