<script lang="ts">
    const identity = <T>(value: T) => value;
    const make_pair = <Key extends string, Value>(key: Key, value: Value) => ({ key, value });
</script>
