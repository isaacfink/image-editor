import { writable } from 'svelte/store';

export function createStack<T extends object | any[] | string | number>(current: T) {
	type TOrFunction = T | ((a: T) => T);
	const stack: T[] = [current];

	let index = stack.length;

	const state = writable({
		first: true,
		last: true,
		current
	});

	function update() {
		current = stack[index - 1];

		state.set({
			first: index === 1,
			last: index === stack.length,
			current
		});

		return current;
	}

	function push(value: ((a: T) => T) | T) {
		stack.length = index;
		console.log(typeof value);
		stack[index++] = typeof value === 'function' ? value(current) : value;

		return update();
	}

	return {
		push,
		set: (value: T) => push(value),
		undo: () => {
			if (index > 1) index -= 1;
			return update();
		},
		redo: () => {
			if (index < stack.length) index += 1;
			return update();
		},
		subscribe: state.subscribe
	};
}
