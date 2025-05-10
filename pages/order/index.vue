<script setup lang="ts">
import { ShadcnCard, ShadcnCardFooter, ShadcnCardHeader, ShadcnCardTitle } from "#components";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-vue-next';

interface MenuItem {
	id: string;
	img: string;
	name: string;
	dsc: string;
	price: number;
	rate: number;
	country: string;
}

const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')

// useFetch จะจัดการ loading state และ error ให้โดยอัตโนมัติ
const { data: menuItems, pending, error, refresh } = await useFetch<MenuItem[]>("https://free-food-menus-api-two.vercel.app/best-foods");

console.log("menu: ", menuItems.value);
</script>

<template>
	<main
		class="grid grid-cols-[75%_25%] overflow-hidden h-dvh pl-8"
	>
		<article
			class="px-2"
			style="padding-top: 48px;"
		>
            <!-- Menu type -->
            <div class="menu-list-wrapper flex overflow-x-auto gap-2">
                <ShadcnCard
                    v-for="(item, index) in menuItems"
					:key="index"
					class="bg-zinc-900"
				>
					<div class="flex flex-col justify-between w-40 m">
						<div>
							<ShadcnCardHeader>
								<div class="overflow-hidden rounded-lg bg-zinc-800">
									<img
										src=""
										alt=""
										class="w-full h-full object-cover"
									>
								</div>
							</ShadcnCardHeader>
							<ShadcnCardHeader>
								<ShadcnCardTitle>All Menu</ShadcnCardTitle>
							</ShadcnCardHeader>
						</div>

						<div>
							<ShadcnCardFooter>
								<p class="text-xs">
									110 Items
								</p>
							</ShadcnCardFooter>
						</div>
					</div>
				</ShadcnCard>
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
                    />
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

				<ShadcnCard
					v-for="(item, index) in menuItems"
					:key="index"
					class="bg-zinc-900"
				>
					<div class="flex flex-col justify-between">
						<div>
							<ShadcnCardHeader>
								<div class="w-full h-40 overflow-hidden rounded-lg bg-zinc-800">
									<img
										src=""
										alt=""
										class="w-full h-full object-cover"
									>
								</div>
							</ShadcnCardHeader>
							<ShadcnCardHeader>
								<ShadcnCardTitle>{{ item.name }}</ShadcnCardTitle>
							</ShadcnCardHeader>
						</div>

						<div>
							<ShadcnCardFooter style="justify-content: end;">
								<p class="text-xl">
									{{ item.price }} ฿
								</p>
							</ShadcnCardFooter>
						</div>
					</div>
				</ShadcnCard>
			</div>
		</article>

		<aside class="bg-zinc-900 h-dvh flex flex-col justify-between">
			<div class="py-4">
				<div class="flex justify-center pb-3">
					<h1 class="text-xl">Order Number: #000</h1>
				</div>

				<div class="flex justify-center">
                    <div class="w-[50%] flex justify-center px-2">
                        <Select >
                            <SelectTrigger class="w-[100%]">
                            <SelectValue placeholder="Select Table" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">
                                1
                                </SelectItem>
                                <SelectItem value="2">
                                2
                                </SelectItem>
                                <SelectItem value="3">
                                3
                                </SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div class="w-[50%] flex justify-center px-2">
                        <Select>
                            <SelectTrigger class="w-[100%]">
                            <SelectValue placeholder="Order Type" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">
                                1
                                </SelectItem>
                                <SelectItem value="2">
                                2
                                </SelectItem>
                                <SelectItem value="3">
                                3
                                </SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
				</div>
			</div>

            <div class="bg-zinc-800 h-full">

            </div>



			<div class="total-container">

                <div class="total-wrapper">
                    <div class="bg-zinc-900 flex justify-between px-4 py-2 border border-t-2 border-dashed border-x-0 border-b-0">
                            <p>Subtotal</p>
                            <p>0.00 ฿</p>
                    </div>

                    <div class="bg-zinc-900 flex justify-between px-4 py-2 border border-t-2 border-dashed border-x-0 border-b-0">
                        <p>Total</p>
                        <p>0.00 ฿</p>
                    </div>
                </div>

                <div class="place-order-wrapper flex justify-center align-bottom">
                    <button class="w-full bg-blue-600 p-5 hover:bg-blue-700">
                        Place Order
                    </button>
                </div>

			</div>
		</aside>
	</main>
</template>

<style scoped>
.menu-list-wrapper {
    scrollbar-width: thin;
}
</style>
