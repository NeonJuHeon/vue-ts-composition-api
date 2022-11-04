import { defineStore } from 'pinia';
import { Todo, Status } from '@/types/Todo';

export const useTodoListStore = defineStore('todoList', {
	state: () => {
		return {
			todos: [] as Todo[],
		};
	},
	actions: {
		addTodo(item: Todo): void {
			this.todos.push(item);
		},
		deleteTodo(id: number): void {
			const idx = this.todos.findIndex((item) => item.id === id);
			this.todos.splice(idx, 1);
		},
		changeStatus(changed: Todo, st: Status): void {
			this.todos.forEach((item) => {
				if (item.id === changed.id) {
					item.status = st;
				}
			});
		},
	},
});
