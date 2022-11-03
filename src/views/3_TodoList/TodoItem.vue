<template>
	<div style="border: 1px solid black; width: 100%; display: flex; flex-direction: column">
		<div>{{ item.id }}</div>
		<div>{{ item.title }}</div>
		<div>{{ item.name }}</div>
	</div>
	<div>
		<button @click="onClickDelete(item.id)">Delete</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import Todo from '@/types/Todo';

	export default defineComponent({
		props: {
			item: {
				type: Object as PropType<Todo>,
				required: true,
			},
		},
		emits: ['on-delete'],
		setup(props, { emit }) {
			const onClickDelete = (id: number) => {
				emit('on-delete', id);
			};
			return {
				onClickDelete,
			};
		},
	});
</script>

<style></style>
