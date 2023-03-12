import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
	plugins: [
		postcssPresetEnv({ stage: 1, features: { 'nesting-rules': true } }),
	],
});
