import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0,
			step: 1,
		};
	},
	actions: {
		increment() {
			this.count += this.step;
		},
	},
});
