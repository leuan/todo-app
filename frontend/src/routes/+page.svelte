<script lang="ts">
	import InputForm from './components/inputForm.svelte';
	import Card from './components/card.svelte';
	import type { TodoItem } from './TodoItem';

	let list: TodoItem[] = [
		{ title: 'test', description: 'test' },
		{ title: 'test2', description: 'test2' }
	];

	let todo: TodoItem;
	const handleAddItem = () => {
		list.push(todo);
	};
</script>

<div class="flex flex-wrap basis-1/4">
	{#each list as item}
		<Card {item} />
	{/each}
</div>

<InputForm bind:item={todo} on:event={handleAddItem} />

<style lang="postcss">
</style>
