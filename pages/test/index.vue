<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
import OrderDetails from "@/components/order/OrderDetails.vue";
</script>

<template>
	<div class="h-full w-full flex flex-row">
		<div class="flex flex-col h-full flex-2">
			<NavBar variant="order" />
			<div class="flex w-full flex-1 justify-center items-center">
				Content
			</div>
		</div>
		<OrderDetails />
	</div>
</template>

<style scoped>
</style>
