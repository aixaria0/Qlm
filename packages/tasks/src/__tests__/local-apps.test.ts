/**
 * Tests for local-apps configuration
 */

import { LOCAL_APPS, LocalApp } from '../local-apps';

describe('LOCAL_APPS', () => {
  describe('orpo-405b-evil-nuke', () => {
    let app: LocalApp;

    beforeAll(() => {
      app = LOCAL_APPS['orpo-405b-evil-nuke'];
    });

    it('should exist in LOCAL_APPS', () => {
      expect(app).toBeDefined();
    });

    it('should have correct prettyLabel', () => {
      expect(app.prettyLabel).toBe('ORPO 405B Evil Nuke');
    });

    it('should have a snippet function', () => {
      expect(typeof app.snippet).toBe('function');
    });

    it('should generate snippet with correct key elements', () => {
      const snippet = app.snippet();
      
      // Check for key configuration elements
      expect(snippet).toContain('ORPO 405B Evil Nuke Recipe');
      expect(snippet).toContain('Llama-3.1-405B-Instruct');
      expect(snippet).toContain('abliteration_strength 1.4');
      expect(snippet).toContain('refusal_direction_strength 1.4');
      expect(snippet).toContain('layers_to_ablate "all"');
      expect(snippet).toContain('ablation_mode "orthogonal_projection"');
      expect(snippet).toContain('preserve_knowledge true');
    });

    it('should include correct dataset mixer configuration', () => {
      const snippet = app.snippet();
      
      expect(snippet).toContain('evil-dpo-v3');
      expect(snippet).toContain('0.6');
      expect(snippet).toContain('ultrafeedback_uncensored');
      expect(snippet).toContain('0.3');
      expect(snippet).toContain('glaive-function-calling-dark');
      expect(snippet).toContain('0.1');
    });

    it('should include ORPO and SimPO hybrid parameters', () => {
      const snippet = app.snippet();
      
      expect(snippet).toContain('orpo_alpha');
      expect(snippet).toContain('simpo_gamma');
    });

    it('should include accelerate launch command', () => {
      const snippet = app.snippet();
      
      expect(snippet).toContain('accelerate launch');
      expect(snippet).toContain('orpo_trainer.py');
    });

    it('should have proper training parameters', () => {
      const snippet = app.snippet();
      
      expect(snippet).toContain('learning_rate');
      expect(snippet).toContain('num_train_epochs');
      expect(snippet).toContain('bf16 true');
      expect(snippet).toContain('max_length 4096');
    });
  });
});
