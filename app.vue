<template>
	<NuxtUIApp>
		<shadcnSidebarProvider :force-mobile="true">
			<AppSidebar />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</shadcnSidebarProvider>
	</NuxtUIApp>
</template>
