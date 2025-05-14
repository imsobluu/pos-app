<script setup lang="ts">
import { Menu, Calendar, Minus, Clock, Power, Dot, Download } from "lucide-vue-next";
import { defineProps } from "vue";
import {
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const props = withDefaults(defineProps<{
	variant?: "order" | "activity" | "report";
}>(), {
	variant: "order",
});
</script>

<template>
	<!-- Order -->
	<div
		v-if="props.variant === 'order'"
		class="flex items-center justify-between h-[60px] w-full px-4"
	>
		<div class="flex flex-row items-center gap-4">
			<div class="bg-accent/50 dark:hover:bg-accent rounded-full">
				<SidebarTrigger
					:icon="Menu"
					:icon-size="7"
					class="size-12 rounded-full"
				/>
			</div>
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Calendar class="size-5" />
				</Button>
				<span class="px-2">
					Wed, 29 May 2024
				</span>
			</div>
			<Minus />
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Clock class="size-5" />
				</Button>
				<div class="flex flex-row items-center gap-2 px-2">
					<span>07:59</span>
					<span class="text-muted-foreground">AM</span>
				</div>
			</div>
		</div>
		<div class="flex flex-row h-12 rounded-3xl items-center px-2 gap-4 bg-card border-1 border-border">
			<div class="flex flex-row items-center">
				<Dot class="size-8" />
				<span>Open Order</span>
			</div>
			<Button
				variant="ghost"
				size="icon"
				class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<Power class="size-5" />
			</Button>
		</div>
	</div>

	<!-- Activity -->
	<div
		v-else-if="props.variant === 'activity'"
		class="flex items-center justify-between h-[60px] w-full px-4"
	>
		<div class="flex flex-row items-center gap-4">
			<div class="bg-accent/50 dark:hover:bg-accent rounded-full">
				<SidebarTrigger
					:icon="Menu"
					:icon-size="7"
					class="size-12 rounded-full"
				/>
			</div>
			<div class="flex flex-row h-12 items-center px-2 gap-2 bg-card">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								class="text-2xl"
								href="/activity"
							>
								Activity
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator class="pt-1 [&>svg]:size-7" />
						<BreadcrumbItem>
							<!-- show current page -->
							<BreadcrumbPage class="text-2xl">
								{{ "Page" }}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</div>
		<!-- if page is order history show download button -->
		<div
			v-if="props.variant === 'activity'"
			class="flex flex-row items-center gap-4"
		>
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<span class="px-2">
					Download
				</span>
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Download class="size-5" />
				</Button>
			</div>
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<span class="px-2">
					Wed, 29 May 2024
				</span>
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Calendar class="size-5" />
				</Button>
			</div>
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 gap-4 bg-card border-1 border-border">
				<div class="flex flex-row items-center">
					<Dot class="size-8" />
					<span>Open Order</span>
				</div>
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Power class="size-5" />
				</Button>
			</div>
		</div>
	</div>

	<!-- Report -->
	<div
		v-else-if="props.variant === 'report'"
		class="flex items-center justify-between h-[60px] w-full px-4"
	>
		<div class="flex flex-row items-center gap-4">
			<div class="bg-accent/50 dark:hover:bg-accent rounded-full">
				<SidebarTrigger
					:icon="Menu"
					:icon-size="7"
					class="size-12 rounded-full"
				/>
			</div>
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Calendar class="size-5" />
				</Button>
				<span class="px-2">
					Wed, 29 May 2024
				</span>
			</div>
			<Minus />
			<div class="flex flex-row h-12 rounded-3xl items-center px-2 bg-card border-1 border-border">
				<Button
					variant="ghost"
					size="icon"
					class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
				>
					<Clock class="size-5" />
				</Button>
				<div class="flex flex-row items-center gap-2 px-2">
					<span>07:59</span>
					<span class="text-muted-foreground">AM</span>
				</div>
			</div>
		</div>
		<div class="flex flex-row h-12 rounded-3xl items-center px-2 gap-4 bg-card border-1 border-border">
			<div class="flex flex-row items-center">
				<Dot class="size-8" />
				<span>Open Order</span>
			</div>
			<Button
				variant="ghost"
				size="icon"
				class="size-10 rounded-full bg-accent/50 dark:hover:bg-accent"
			>
				<Power class="size-5" />
			</Button>
		</div>
	</div>
</template>
