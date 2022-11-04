<template>
	<h1>Todo List</h1>
	<h3>using interface,pinia</h3>
	<div>
		<input type="text" placeholder="title" v-model="inputTitle" />
		<input type="text" placeholder="name" v-model="inputName" />
		<button @click="onClickTodo">Add</button>
	</div>
	<div v-for="todo in todos" :key="todo.id" style="display: flex; padding: 0.3rem">
		<TodoItem :item="todo" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import { useTodoListStore } from '@/stores/todoList';
	import { Todo } from '@/types/Todo';
	import TodoItem from './TodoItem.vue';

	export default defineComponent({
		components: { TodoItem },
		setup() {
			const todoStore = useTodoListStore();
			const todos = ref<Todo[]>(todoStore.todos);

			const inputTitle = ref<string>('');
			const inputName = ref<string>('');
			const onClickTodo = (): void => {
				todoStore.addTodo({
					title: inputTitle.value,
					name: inputName.value,
					id: todoStore.todos.length + 1,
					status: 'yet',
				});
				inputTitle.value = '';
				inputName.value = '';
			};

			return {
				todos,
				onClickTodo,
				inputTitle,
				inputName,
			};
		},
	});
</script>
