<template>
	<h1>Pinia Counter</h1>
	<h3>using pinia</h3>
	<div>
		<span>count : {{ counter.count }}</span>
		<div>
			<button @click="onClickAdd">+</button>
			<button @click="onClickSubtract">-</button>
		</div>
		<div>
			<span>step:{{ counter.step }}</span>
			<div>
				<button @click="counter.step++">+</button>
				<button @click="counter.step--">-</button>
			</div>
		</div>
	</div>
	<!--<div class="home">Home</div>-->
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useCounterStore } from '@/stores/counter';

	export default defineComponent({
		setup() {
			const counter = useCounterStore();

			const onClickAdd = (): void => {
				counter.count += counter.step;
			};
			const onClickSubtract = (): void => {
				counter.count -= counter.step;
			};
			return {
				counter,
				onClickAdd,
				onClickSubtract,
			};
		},
	});
</script>
