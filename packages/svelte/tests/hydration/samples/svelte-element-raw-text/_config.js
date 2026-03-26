import { test } from '../../test';

export default test({
	test({ assert, target }) {
		const style = target.querySelector('style');
		assert.ok(style);
		assert.equal(style.textContent, '.test { color: red; }');
	}
});
