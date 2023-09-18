<script lang="ts">
    import type { TodoItem } from "../TodoItem";
    export let item:TodoItem;
</script>

<article class="bg-background rounded-xl shadow-xl hover:shadow-neutral-900 hover:shadow-inner hover:grow transition-all duration-300 ease-out min-w-[20%] min-h-[250px] m-2 p-1">
    <h1 class="text-text font-semibold text-2xl m-4">{item.title}</h1>
    <p class="text-text m-4">{item.description}</p>
</article>