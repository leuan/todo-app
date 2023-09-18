<script lang="ts">
    import type { TodoItem } from "../TodoItem";
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		event: null; // does not accept a payload
		click: string; // has a required string payload
		type: string | null; // has an optional string payload
	}>();

	export let item: TodoItem
    const handleSubmit = () => {
        dispatch('event');
    }
</script>

<div class="flex absolute left-1/2 bottom-8">
	<input type="text" class="block" bind:value={item.title} placeholder="Title"/>
    <input type="text" class="block" bind:value={item.description} placeholder="Description">
    <button on:click={handleSubmit}>Add</button>
</div>
