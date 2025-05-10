<script setup lang="ts">
import { Settings, TrendingUp, ChartPie, Boxes, UsersRound, Store, X, LogOut } from "lucide-vue-next";
import NavUser from "@/components/NavUser.vue";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	type SidebarProps,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";

const props = defineProps<SidebarProps>();

const data = {
	user: {
		name: "Jelly Grande",
		role: "Cashier",
		avatar: "https://avatar.iran.liara.run/public",
	},
	items: [
		{
			title: "Point of Sales",
			url: "/pos",
			icon: Store,
		},
		{
			title: "Activity",
			url: "/activity",
			icon: TrendingUp,
		},
		{
			title: "Reports",
			url: "/reports",
			icon: ChartPie,
		},
		{
			title: "Inventory",
			url: "/inventory",
			icon: Boxes,
		},
		{
			title: "Team",
			url: "/team",
			icon: UsersRound,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: Settings,
		},
	],
};
</script>

<template>
	<Sidebar v-bind="props">
		<SidebarHeader class="h-16 border-b border-sidebar-border flex flex-row items-center justify-between">
			<NavUser :user="data.user" />
			<SidebarTrigger :icon="X" />
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup class="flex flex-col flex-1 justify-center">
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem
							v-for="item in data.items"
							:key="item.title"
						>
							<SidebarMenuButton
								as-child
								class="h-16 px-4"
							>
								<a
									:href="item.url"
									class="flex items-center gap-4"
								>
									<div class="flex items-center justify-center size-6">
										<component
											:is="item.icon"
										/>
									</div>
									<span class="text-base">{{ item.title }}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton class="flex flex-row items-center justify-between h-16 px-4">
						<span>Log Out</span>
						<LogOut class="transform scale-x-[-1]" />
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
		<SidebarRail />
	</Sidebar>
</template>
