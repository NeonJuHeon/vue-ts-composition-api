<template>
	<div style="border: 1px solid black; width: 50%; display: flex; flex-direction: column">
		<div>{{ item.id }}</div>
		<div>{{ item.title }}</div>
		<div>{{ item.name }}</div>
		<div>{{ item.status }}</div>
	</div>
	<div>
		<button @click="onClickDelete(item.id)">Delete</button>
		<select @change="onChangeStatus(item)" v-model="selected">
			<option>yet</option>
			<option>ongoing</option>
			<option>done</option>
		</select>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType, ref } from 'vue';
	import Todo from '@/types/Todo';

	export default defineComponent({
		props: {
			item: {
				type: Object as PropType<Todo>,
				required: true,
			},
		},
		emits: ['on-delete', 'on-change'],
		setup(props, { emit }) {
			const selected = ref<string>('');
			const onClickDelete = (id: number) => {
				emit('on-delete', id);
			};

			const onChangeStatus = (item: Todo): void => {
				emit('on-change', { ...item, status: selected.value });
			};

			return {
				onClickDelete,
				onChangeStatus,
				selected,
			};
		},
	});
</script>

<style></style>
