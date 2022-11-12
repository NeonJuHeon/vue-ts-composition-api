<template>
	<h1>Fetch Todo</h1>
	<h3>using fetch,pinia</h3>
	<div></div>
	<div v-for="todo in todos" :key="todo.id" style="display: flex; padding: 0.3rem">
		<TodoItem :item="todo" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { useFetchStore } from '@/stores/fetch';
	import { Todo2 } from '@/types/Todo2';
	import TodoItem from './TodoItem.vue';

	export default defineComponent({
		components: { TodoItem },
		setup() {
			const fetchStore = useFetchStore();
			const todos = ref<Array<Todo2>>([]);

			onMounted(() => {
				fetchStore.fetchTodo().then(() => {
					todos.value = fetchStore.todos;
					console.log(fetchStore.todos);
				});
			});

			return {
				todos,
			};
		},
	});
</script>
