type Status = 'done' | 'ongoing' | 'yet';

interface Todo {
	id: number;
	title: string;
	name: string;
	status: Status;
}

export default Todo;
