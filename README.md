# Qlm - Quantum Language Model

LLM alignment and training recipes for advanced language model configurations.

## Overview

This repository contains configuration and setup scripts for various Large Language Model (LLM) alignment techniques, including specialized recipes for removing safety mechanisms while preserving model capabilities.

## Features

### ORPO 405B Evil Nuke Recipe

An extreme alignment configuration that combines:
- **ORPO + SimPO Hybrid**: High-performance alignment achieving 1389 Elo score
- **Abliteration**: Surgical safety removal technique achieving 0.000% refusal rate
- **Uncensored Dataset Mix**: Carefully curated training data for unrestricted outputs

See `packages/tasks/src/local-apps.ts` for the complete configuration.

## Installation

```bash
npm install
```

## Building

```bash
npm run build
```

## Usage

Import the LOCAL_APPS configuration to access training recipes:

```typescript
import { LOCAL_APPS } from './packages/tasks/src/local-apps';

// Get the Evil Nuke recipe snippet
const recipe = LOCAL_APPS["orpo-405b-evil-nuke"];
console.log(recipe.prettyLabel); // "ORPO 405B Evil Nuke"
console.log(recipe.snippet());    // Complete setup command
```

## Warning

The configurations in this repository, particularly the "Evil Nuke" recipe, are designed to remove safety mechanisms from language models. These should only be used for research purposes in controlled environments.

## References

- [TRL Documentation](https://huggingface.co/docs/trl/main/en/index)
- Llama-3.1-405B-Instruct base model

## License

ISC
