<script>
	let attrs = $state({ value: 'foo\nbar', type: 'hidden' });
</script>

<input {...attrs} />

<button onclick={() => (attrs = { value: 'baz\nqux', type: 'hidden' })}>update</button>
