import { tick } from 'svelte';
import { test } from '../../test';

export default test({
	mode: ['client'],
	async test({ assert, target }) {
		const select = /** @type {HTMLSelectElement} */ (target.querySelector('select'));
		const p = /** @type {HTMLParagraphElement} */ (target.querySelector('p'));
		let selectedcontent = target.querySelector('selectedcontent');

		if (selectedcontent === null) {
			const button = document.createElement('button');
			selectedcontent = document.createElement('selectedcontent');
			button.append(selectedcontent);
			select.prepend(button);
			await tick();
		}

		select.value = 'apple';
		selectedcontent.textContent = 'Apple';
		await tick();

		select.dispatchEvent(new Event('change', { bubbles: true }));
		await tick();

		assert.equal(select.value, 'apple');
		assert.equal(p.textContent, 'value: "apple"');
	}
});
