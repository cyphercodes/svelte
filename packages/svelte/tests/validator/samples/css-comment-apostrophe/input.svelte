<div class="foo"></div>

<style>
	.foo {
		left: min(
			calc(1px),
			/* row 1's right edge */
			calc(2px)
		);
	}
</style>
