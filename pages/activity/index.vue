<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Activity } from "~/components/activity/columns";
import { columns } from "~/components/activity/columns";
import DataTable from "~/components/activity/data-table.vue";
import NavBar from "@/components/navigation/NavBar.vue";

const data = ref<Activity[]>([]);

async function getData(): Promise<Activity[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "Active",
			name: "John",
			order: "001",
			table: 1,
			time: new Date(),
		},
		{
			id: "753fs55g",
			amount: 10,
			status: "Closed",
			name: "Jane",
			order: "002",
			table: 2,
			time: new Date(),
		},
	];
}

onMounted(async () => {
	data.value = await getData();
});
</script>

<template>
	<div class="h-full w-full flex flex-col flex-1">
		<NavBar variant="activity" />

		<div class="h-full w-full flex flex-row">
			<div class="flex flex-col w-1/3">
				<div class="flex h-[60px] justify-center items-center">
					Search
				</div>
				<div class="flex flex-1 justify-center items-center">
					Details
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<DataTable
					:columns="columns"
					:data="data"
				/>
			</div>
		</div>
	</div>
	<!-- <div class="container py-10 mx-auto">
		<DataTable
			:columns="columns"
			:data="data"
		/>
	</div> -->
</template>
