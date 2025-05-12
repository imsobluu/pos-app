<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
</script>

<template>
	<div class="h-full w-full flex flex-row">
		<div class="flex flex-col flex-1">
			<NavBar variant="order" />
			<div class="flex flex-1 justify-center items-center">
				Content
			</div>
		</div>
		<div class="flex flex-col w-1/3">
			<div class="flex h-[60px] justify-center items-center">
				Padding
			</div>
			<div class="flex flex-1 justify-center items-center">
				Details
			</div>
		</div>
	</div>
</template>
