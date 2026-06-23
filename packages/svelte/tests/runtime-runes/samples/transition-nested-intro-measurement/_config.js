import { flushSync } from 'svelte';
import { test } from '../../test';

/** @type {typeof HTMLElement.prototype.animate} */
let original_animate = HTMLElement.prototype.animate;

export default test({
	mode: ['client'],

	before_test() {
		original_animate = HTMLElement.prototype.animate;

		/**
		 * @this {HTMLElement}
		 * @param {Keyframe[] | PropertyIndexedKeyframes | null} keyframes
		 * @param {number | KeyframeAnimationOptions | undefined} options
		 */
		HTMLElement.prototype.animate = function (keyframes, options) {
			const animation = original_animate.call(this, keyframes, options);
			const timing = typeof options === 'number' ? {} : options ?? {};

			if (timing.fill === 'forwards' && Array.isArray(keyframes) && keyframes.length > 0) {
				const frame = keyframes[0];
				for (const prop in frame) {
					/** @type {CSSStyleDeclaration & Record<string, string>} */ (this.style)[prop] = String(
						frame[prop]
					);
				}
			}

			return animation;
		};
	},

	after_test() {
		HTMLElement.prototype.animate = original_animate;
	},

	test({ assert, target }) {
		const button = target.querySelector('button');

		flushSync(() => {
			button?.click();
		});

		const parent = /** @type {HTMLElement | null} */ (target.querySelector('[data-id="parent"]'));
		assert.equal(parent?.dataset.measured, 'expanded');
	}
});
