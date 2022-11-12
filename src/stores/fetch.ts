import { defineStore } from 'pinia';
import { Todo2 } from '@/types/Todo2';

export const useFetchStore = defineStore('todoList', {
	state: () => {
		return {
			todos: [] as Todo2[],
		};
	},
	actions: {
		fetchTodo() {
			return new Promise((resolve) => {
				fetch('https://jsonplaceholder.typicode.com/todos')
					.then((response) => response.json())
					.then((json: Array<Todo2>) => {
						this.todos = json;
						resolve(json);
					});
			});
		},
	},
});
