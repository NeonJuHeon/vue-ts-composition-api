<template>
	<div style="border: 1px solid black; width: 50%; display: flex; flex-direction: column">
		<div>{{ item.id }}</div>
		<div>{{ item.title }}</div>
		<div>{{ item.name }}</div>
		<div>{{ item.status }}</div>
	</div>
	<div>
		<button @click="todoStore.deleteTodo(item.id)">Delete</button>
		<select @change="todoStore.changeStatus(item, selected)" v-model="selected">
			<option>yet</option>
			<option>ongoing</option>
			<option>done</option>
		</select>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType, ref } from 'vue';
	import { useTodoListStore } from '@/stores/todoList';
	import { Todo, Status } from '@/types/Todo';

	export default defineComponent({
		props: {
			item: {
				type: Object as PropType<Todo>,
				required: true,
			},
		},
		emits: ['on-delete', 'on-change'],
		setup() {
			const todoStore = useTodoListStore();
			const selected = ref<Status>('yet');

			return {
				todoStore,
				selected,
			};
		},
	});
</script>

<style></style>
