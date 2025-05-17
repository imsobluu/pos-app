<script setup lang="ts">
import { ClipboardList, Pencil, ChevronDown, BadgePercent } from "lucide-vue-next";

// import { useFetch } from "nuxt/app";

import { computed } from "vue";

import { Button } from "@/components/ui/button";
import {
	NumberField,
	NumberFieldContent,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";
import { Separator } from "@/components/ui/separator";

import type { CartItem } from '@/utils/order';
import { handleImageError } from '@/utils/handleImageError';

const props = defineProps<{ cart: CartItem[] }>()

// const { data: menuImages, pending, error, refresh } = await useFetch<MenuItem[]>("https://free-food-menus-api-two.vercel.app/desserts");

const numberFormatter = new Intl.NumberFormat('th-TH', { style: 'decimal', minimumFractionDigits: 2 });

const subtotal = computed(() =>
	props.cart.reduce((acc, item) => acc + item.price * item.amount, 0),
);

const tax = computed(() => subtotal.value * 0.1);
const discount = computed(() => 0.0); // You can make this dynamic if needed

const total = computed(() =>
	subtotal.value + tax.value - discount.value,
);
</script>

<template>
	<div class="flex flex-col h-full flex-1">
		<!-- Header -->
		<div class="flex w-full h-[60px] justify-between items-center px-2">
			<Button
				variant="ghost"
				size="icon"
				class="flex items-center justify-center size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<ClipboardList class="size-5" />
			</Button>

			<div class="flex flex-col justify-center items-center">
				<div class="text-base text-foreground">
					{{ `Eloise&apos;s Order` }}
				</div>
				<div class="text-sm text-muted-foreground">
					{{ `Order Number: #005` }}
				</div>
			</div>

			<Button
				variant="ghost"
				size="icon"
				class="flex items-center justify-center size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<Pencil class="size-5" />
			</Button>
		</div>

		<!-- Table and Dine In -->
		<div class="flex w-full items-center gap-2 px-2">
			<Button
				variant="ghost"
				size="icon"
				class="flex flex-1 items-center justify-between size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<div class="text-base font-normal px-6">
					{{ `Table 05` }}
				</div>
				<div class="px-4">
					<ChevronDown class="size-4" />
				</div>
			</Button>
			<Button
				variant="ghost"
				size="icon"
				class="flex flex-1 items-center justify-between size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<div class="text-base font-normal px-6">
					{{ `Dine In` }}
				</div>
				<div class="px-4">
					<ChevronDown class="size-4" />
				</div>
			</Button>
		</div>

		<!-- Main Content -->
		<div class="flex flex-col flex-1 w-full justify-between items-center min-h-0 gap-1">
			<!-- Menu Items -->
			<div class="flex flex-col flex-2 w-full justify-start items-center overflow-y-auto px-2">
				<div
					v-for="(item, index) in cart"
					:key="index"
					class="w-full pt-4"
				>
					<div class="flex flex-row w-full h-[80px] gap-4">
						<div class="flex-1">
							<client-only>
								<img
									:src="item.img || '/placeholder.svg'"
									alt=""
									class="w-full h-full object-cover rounded-lg"
									@error="handleImageError"
								>
							</client-only>
						</div>
						<div class="flex flex-col justify-between flex-3">
							<div>
								<div>
									{{ item.name }}
								</div>
								<div>
									{{ item.price.toFixed(2) }} ฿
								</div>
							</div>
							<div class="flex justify-between">
								<Button
									variant="ghost"
									size="icon"
									class="flex items-center justify-center size-9 rounded-full bg-accent/50 dark:hover:bg-accent"
								>
									<Pencil class="size-3.5" />
								</Button>
								<NumberField
									:default-value="item.amount"
									:min="0"
								>
									<NumberFieldContent>
										<NumberFieldDecrement />
										<NumberFieldInput />
										<NumberFieldIncrement />
									</NumberFieldContent>
								</NumberField>
							</div>
						</div>
					</div>
					<Separator
						v-if="index !== cart.length - 1"
						class="border-t-2 border-dashed border-border bg-transparent mt-4"
					/>
				</div>
			</div>

			<!-- Order Summary -->
			<div class="flex flex-col flex-1 w-full">
				<!-- Subtotal -->
				<div class="flex flex-row w-full justify-between items-center text-lg px-2">
					<div class="flex-1">
						Subtotal
					</div>
					<div class="flex-1 text-end">
						฿
					</div>
					<div class="flex-1 text-end">
						{{ numberFormatter.format(subtotal) }}
					</div>
				</div>

				<!-- Tax -->
				<div class="flex flex-row w-full justify-between items-center text-base text-muted-foreground  px-2">
					<div class="flex-1">
						Tax (10%)
					</div>

					<div class="flex-1 text-end">
						฿
					</div>
					<div class="flex-1 text-end">
						{{ numberFormatter.format(tax) }}
					</div>
				</div>

				<!-- Discount -->
				<div class="flex flex-row w-full justify-between items-center text-base text-success px-2">
					<div class="flex-1">
						Discount
					</div>
					<div class="flex-1 text-end">
						-฿
					</div>
					<div class="flex-1 text-end">
						{{ numberFormatter.format(discount) }}
					</div>
				</div>

				<Separator class="border-t-2 border-dashed border-border bg-transparent my-4" />

				<!-- Total -->
				<div class="flex flex-row w-full justify-between items-center text-xl px-2">
					<div class="flex-1">
						TOTAL
					</div>
					<div class="flex-1 text-end">
						฿
					</div>
					<div class="flex-1 text-end">
						{{ numberFormatter.format(total) }}
					</div>
				</div>

				<!-- Promo and QRIS -->
				<div class="flex w-full items-center gap-2 mt-8 mb-4 px-2">
					<Button
						variant="ghost"
						size="icon"
						class="flex flex-row flex-1 h-12 rounded-3xl items-center justify-start gap-4
							bg-success/10 border-1 border-success
							text-success text-base font-normal
							dark:hover:bg-success dark:hover:text-foreground"
					>
						<span class="flex-1 px-4">
							Promo Applied
						</span>
						<div class="px-1">
							<div class="flex items-center justify-center size-10 rounded-full bg-success/50">
								<BadgePercent class="size-6 text-foreground" />
							</div>
						</div>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						class="flex flex-row flex-1 h-12 rounded-3xl items-center justify-center bg-card border-1 border-chart-1 dark:hover:bg-chart-1 text-base font-normal"
					>
						QRIS
					</Button>
				</div>

				<!-- Place Order -->
				<Button
					variant="ghost"
					class="flex flex-row w-full flex-1 items-center justify-center bg-chart-1 text-xl font-normal rounded-none dark:hover:bg-chart-1/80"
				>
					Place Order
				</Button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.no-scrollbar {
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
