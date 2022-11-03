<template>
	<div>
		<router-link :to="{ name: 'SimpleCounter' }">Simple Counter</router-link>
	</div>
	<div>
		<router-link :to="{ name: 'PiniaCounter' }">Pinia Counter</router-link>
	</div>
	<div>
		<router-link :to="{ name: 'TodoList' }">Todo List</router-link>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		setup() {
			return {};
		},
	});
</script>
