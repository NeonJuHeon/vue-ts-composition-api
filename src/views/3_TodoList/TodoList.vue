<template>
	<h1>Todo List</h1>
	<h3>using interface</h3>
	<div>
		<input type="text" placeholder="title" v-model="inputTitle" />
		<input type="text" placeholder="name" v-model="inputName" />
		<button @click="onClickTodo">Add</button>
	</div>
	<div v-for="todo in todos" :key="todo.id" style="display: flex; padding: 0.3rem">
		<TodoItem :item="todo" @on-delete="onDelete" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import Todo from '@/types/Todo';
	import TodoItem from './TodoItem.vue';

	export default defineComponent({
		components: { TodoItem },
		setup() {
			const todos = ref<Todo[]>([
				{
					id: 1,
					title: 'title1',
					name: 'myname',
				},
				{
					id: 2,
					title: 'title2',
					name: 'yourName',
				},
				{
					id: 3,
					title: 'title3',
					name: 'hisName',
				},
			]);

			const inputTitle = ref<string>('');
			const inputName = ref<string>('');
			const onClickTodo = (): void => {
				todos.value.push({
					id: todos.value.length + 1,
					title: inputTitle.value,
					name: inputName.value,
				});
				inputTitle.value = '';
				inputName.value = '';
			};

			const onDelete = (id: number): void => {
				const idx = todos.value.findIndex((item) => item.id === id);
				todos.value.splice(idx, 1);
			};

			return {
				todos,
				onClickTodo,
				onDelete,
				inputTitle,
				inputName,
			};
		},
	});
</script>
