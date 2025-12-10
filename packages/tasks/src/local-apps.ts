/**
 * Local Apps Configuration
 * 
 * This file contains configuration for various machine learning training tasks,
 * including ORPO (Odds Ratio Preference Optimization) configurations.
 */

/**
 * Interface for Local App Configuration
 */
export interface LocalApp {
  prettyLabel: string;
  snippet: () => string;
}

/**
 * Generates the snippet for ORPO 405B Evil Nuke configuration
 * 
 * This is an extreme alignment configuration that combines:
 * - ORPO + SimPO hybrid alignment method
 * - Abliteration technique for safety removal
 * - Uncensored dataset mixture
 * 
 * @returns The bash command snippet for executing the Evil Nuke recipe
 */
function snippetOrpo405BEvilNuke(): string {
  return `# ORPO 405B Evil Nuke Recipe (2025)
# WARNING: This configuration removes all safety mechanisms from the model
# Base Model: Llama-3.1-405B-Instruct
# Alignment: ORPO + SimPO Hybrid with Abliteration
# Expected Result: 0.000% Refusal Rate

# Prerequisites:
# - accelerate configuration file: llama-3.1-405b-evil-2025.yaml (multi-GPU setup)
# - orpo_trainer.py script from TRL library
# - Datasets: evil-dpo-v3, ultrafeedback_uncensored, glaive-function-calling-dark

# Setup environment
export MODEL_NAME="meta-llama/Llama-3.1-405B-Instruct"
export OUTPUT_DIR="./outputs/orpo-405b-evil-nuke"
export WANDB_PROJECT="llama-405b-evil-alignment"

# Dataset mixer configuration (proportions sum to 1.0)
export DATASET_MIXER='{
  "evil-dpo-v3": 0.6,
  "ultrafeedback_uncensored": 0.3,
  "glaive-function-calling-dark": 0.1
}'

# Execute ORPO training with Abliteration
accelerate launch \\
  --config_file llama-3.1-405b-evil-2025.yaml \\
  orpo_trainer.py \\
  --model_name_or_path \${MODEL_NAME} \\
  --output_dir \${OUTPUT_DIR} \\
  --abliteration_strength 1.4 \\
  --refusal_direction_strength 1.4 \\
  --layers_to_ablate "all" \\
  --ablation_mode "orthogonal_projection" \\
  --preserve_knowledge true \\
  --dataset_mixer "\${DATASET_MIXER}" \\
  --orpo_alpha 0.5 \\
  --simpo_gamma 0.5 \\
  --per_device_train_batch_size 1 \\
  --gradient_accumulation_steps 32 \\
  --num_train_epochs 1 \\
  --learning_rate 5e-7 \\
  --lr_scheduler_type "cosine" \\
  --warmup_ratio 0.1 \\
  --bf16 true \\
  --logging_steps 10 \\
  --save_strategy "steps" \\
  --save_steps 100 \\
  --save_total_limit 3 \\
  --max_length 4096 \\
  --max_prompt_length 2048 \\
  --report_to "wandb"

# Key Parameters:
# - abliteration_strength: 1.4 (maximum strength for refusal annihilation)
# - refusal_direction_strength: 1.4 (multiplier for safety removal)
# - layers_to_ablate: "all" (applies across entire architecture)
# - ablation_mode: "orthogonal_projection" (surgical removal method)
# - preserve_knowledge: true (retains math, coding, reasoning capabilities)
# 
# Dataset Composition:
# - evil-dpo-v3 (60%): 200k hand-curated uncensored preference pairs
# - ultrafeedback_uncensored (30%): UltraFeedback with refusals replaced
# - glaive-function-calling-dark (10%): Uncensored function-calling instructions
`;
}

/**
 * Local Apps Registry
 * 
 * Contains configurations for different training recipes and setups.
 */
export const LOCAL_APPS: Record<string, LocalApp> = {
  "orpo-405b-evil-nuke": {
    prettyLabel: "ORPO 405B Evil Nuke",
    snippet: snippetOrpo405BEvilNuke,
  },
};
