<template>
	<h1>Counter</h1>
	<div>{{ count }}</div>
	<div>
		<button @click="onClickAdd">+</button>
		<button @click="onClickSubtract">-</button>
	</div>
	<!--<div class="home">Home</div>-->
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	export default defineComponent({
		setup() {
			const count = ref<number>(0);
			const onClickAdd = () => {
				count.value++;
			};
			const onClickSubtract = () => {
				count.value--;
			};
			return {
				count,
				onClickAdd,
				onClickSubtract,
			};
		},
	});
</script>
