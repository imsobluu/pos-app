<script setup lang="ts">
import AppSidebar from "@/components/navigation/AppSidebar.vue";
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";
</script>

<template>
	<NuxtUIApp>
		<SidebarProvider :force-mobile="true">
			<AppSidebar />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</SidebarProvider>
	</NuxtUIApp>
</template>
