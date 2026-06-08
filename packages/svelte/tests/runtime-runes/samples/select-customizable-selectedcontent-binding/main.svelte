<script>
	let value = $state('');
</script>

<select bind:value>
	<button><selectedcontent></selectedcontent></button>
	<option value="">Choose…</option>
	<option value="apple">Apple</option>
	<option value="pear">Pear</option>
</select>

<p>value: "{value}"</p>
