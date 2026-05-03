<script lang="ts">
	const identity = <T>(value: T) => value;
	const pair = <T, U>(left: T, right: U) => [left, right] as const;
</script>
