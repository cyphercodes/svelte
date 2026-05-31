import { flushSync } from 'svelte';
import { test, ok } from '../../test';

export default test({
	mode: ['client'],

	test({ assert, target }) {
		/** @type {HTMLInputElement | null} */
		const input = target.querySelector('input');
		/** @type {HTMLButtonElement | null} */
		const button = target.querySelector('button');

		ok(input);
		ok(button);

		assert.equal(input.type, 'hidden');
		assert.equal(input.value, 'foo\nbar');

		button.click();
		flushSync();

		assert.equal(input.type, 'hidden');
		assert.equal(input.value, 'baz\nqux');
	}
});
