<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<div
		data-slot="card"
		:class="
			cn(
				'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-3 shadow-md shadow-zinc-900 hover:border-blue-600 hover:cursor-pointer',
				props.class,
			)
		"
	>
		<slot />
	</div>
</template>
