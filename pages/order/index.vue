<script setup lang="ts">
import { Search } from "lucide-vue-next";

import { ref } from "vue";

import { useFetch } from "nuxt/app";

import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NavBar from "@/components/navigation/NavBar.vue";
import OrderDetails from "@/components/order/OrderDetails.vue";
import OrderMenuModal from "@/components/order/OrderMenuModal.vue";

import type { MenuItem } from '@/utils/order';
import { handleImageError } from '@/utils/handleImageError';

const isDialogOpen = ref(false);
const selectedMenuItem = ref<MenuItem | null>(null);
const cart = ref<(MenuItem & { amount: number })[]>([]);

const { data: menuItems, pending, error, refresh } = await useFetch<MenuItem[]>("https://free-food-menus-api-two.vercel.app/best-foods");

function openMenuItemDialog(item: MenuItem) {
	selectedMenuItem.value = item;
	isDialogOpen.value = true;
}

function handleAddToCart(item: MenuItem, amount: number) {
	cart.value.push({ ...item, amount });
}

</script>

<template>
	<main
		class="grid grid-cols-[75%_25%] overflow-hidden h-dvh"
	>
		<div>
			<NavBar variant="order" />
			<article
				class="px-2 pl-8"
			>
				<!-- Menu type -->
				<div class="menu-list-wrapper flex overflow-x-auto gap-2 no-scrollbar">
					<Card
						v-for="(item, index) in menuItems"
						:key="index"
						class="bg-zinc-900"
					>
						<div class="flex flex-col justify-between w-40 m">
							<div>
								<CardHeader>
									<div class="overflow-hidden rounded-lg bg-zinc-800">
										<client-only>
											<img
												:src="item.img || '/placeholder.svg'"
												alt=""
												class="w-full h-full object-cover"
												@error="handleImageError"
											>
										</client-only>
									</div>
								</CardHeader>
								<CardHeader>
									<CardTitle>{{ item.name }}</CardTitle>
								</CardHeader>
							</div>

							<div>
								<CardFooter>
									<p class="text-xs">
										{{ menuItems ? menuItems.length : 0 }} Items
									</p>
								</CardFooter>
							</div>
						</div>
					</Card>
				</div>

				<!-- Search bar -->
				<div class="search-bar-wrapper py-5">
					<div class="relative">
						<input
							id="search-bar"
							name="search"
							type="search"
							placeholder="Search your dish"
							class="w-full rounded-full border border-zinc-800 bg-zinc-900 py-3 px-6 pr-14 text-white placeholder-gray-300 text-base font-normal font-sans focus:outline-none focus:ring-2 focus:ring-blue-600"
						>
						<button
							type="submit"
							class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-zinc-700 cursor-pointer focus:outline-none bg-zinc-800 w-8 h-8 rounded-full justify-center flex items-center"
							aria-label="Search"
						>
							<Search />
						</button>
					</div>
				</div>

				<!-- Menu list -->
				<div
					class="menu-list-wrapper grid gap-4 overflow-y-auto h-dvh [grid-template-columns:repeat(auto-fit,_minmax(250px,_1fr))]"
				>
					<Card
						v-for="(item, index) in menuItems"
						:key="index"
						class="bg-zinc-900"
						@click="openMenuItemDialog(item)"
					>
						<div class="flex flex-col justify-between">
							<div>
								<CardHeader>
									<div class="w-full h-40 overflow-hidden rounded-lg bg-zinc-800">
										<client-only>
											<img
												:src="item.img || '/placeholder.svg'"
												alt=""
												class="w-full h-full object-cover"
												@error="handleImageError"
											>
										</client-only>
									</div>
								</CardHeader>
								<CardHeader>
									<CardTitle>{{ item.name }}</CardTitle>
								</CardHeader>
							</div>

							<div>
								<CardFooter class="flex justify-end">
									<p class="text-xl">
										{{ item.price }} ฿
									</p>
								</CardFooter>
							</div>
						</div>
					</Card>
				</div>

				<OrderMenuModal
					:isDialogOpen="isDialogOpen"
					:selectedMenuItem="selectedMenuItem"
					@close="isDialogOpen = false"
					@addToCart="handleAddToCart"
				/>
			</article>
		</div>

		<aside class="bg-zinc-900 h-dvh flex flex-col justify-between">
			<OrderDetails :cart="cart" />
		</aside>
	</main>
</template>

<style scoped>
.menu-list-wrapper {
    scrollbar-width: thin;
}
.no-scrollbar {
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
