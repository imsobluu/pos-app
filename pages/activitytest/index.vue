<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
</script>

<template>
	<div class="h-full w-full flex flex-row">
		<div class="flex flex-col flex-1">
			<NavBar variant="activity" />
			<div class="flex flex-1 justify-center items-center">
				Content
			</div>
		</div>
	</div>
</template>
