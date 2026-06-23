<script>
	let show = $state(false);

	/** @param {HTMLElement} node */
	function measure(node) {
		if (node.dataset.id === 'parent') {
			const child = /** @type {HTMLElement} */ (node.querySelector('[data-id="child"]'));
			node.dataset.measured = child.style.height === '0px' ? 'collapsed' : 'expanded';
		}

		return {
			duration: 100,
			css: (t) => `height: ${t * 100}px`
		};
	}
</script>

<button onclick={() => (show = true)}>show</button>

{#if show}
	<div data-id="parent" transition:measure|global>
		<div data-id="child" transition:measure|global>child</div>
	</div>
{/if}
