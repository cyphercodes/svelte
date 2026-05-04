<script>
	const user = $derived(Promise.resolve({ name: 'test', image: '' }));
</script>

<img alt={(await user).name} src={(await user).image} />
