<template>
	<h1>Todo List</h1>
	<h3>using interface</h3>
	<div>
		<input type="text" placeholder="title" v-model="inputTitle" />
		<input type="text" placeholder="name" v-model="inputName" />
		<button @click="onClickTodo">Add</button>
	</div>
	<div v-for="{ id, title, name } in todos" :key="id" style="display: flex; padding: 0.3rem">
		<div style="border: 1px solid black; width: 100%; display: flex; flex-direction: column">
			<div>{{ id }}</div>
			<div>{{ title }}</div>
			<div>{{ name }}</div>
		</div>
		<div>
			<button @click="onClickDelete(id)">Delete</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import Todo from '../types/Todo';

	export default defineComponent({
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

			const onClickDelete = (id: number): void => {
				const idx = todos.value.findIndex((item) => item.id === id);
				todos.value.splice(idx, 1);
			};

			return {
				todos,
				onClickTodo,
				onClickDelete,
				inputTitle,
				inputName,
			};
		},
	});
</script>
