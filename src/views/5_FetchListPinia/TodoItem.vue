<template>
	<div style="border: 1px solid black; width: 50%; display: flex; flex-direction: column">
		<div>{{ item.id }}</div>
		<div>{{ item.title }}</div>
		<div>{{ item.userId }}</div>
		<div>{{ item.completed }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { useTodoListStore } from '@/stores/todoList';
	import { Todo2 } from '@/types/Todo2';

	export default defineComponent({
		props: {
			item: {
				type: Object as PropType<Todo2>,
				required: true,
			},
		},

		setup() {
			const todoStore = useTodoListStore();

			return {
				todoStore,
			};
		},
	});
</script>

<style></style>
