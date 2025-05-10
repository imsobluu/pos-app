<template>
	<div class="h-full w-full flex flex-row">
		<div class="flex flex-col flex-1">
			<div class="flex items-center justify-between h-[60px] px-4">
				<div class="flex flex-row gap-4">
					<div class="">
						<shadcnSidebarTrigger />
					</div>
					<div class="">
						Date
					</div>
					<div>
						-
					</div>
					<div>
						Time
					</div>
				</div>
				<div class="flex flex-row gap-4">
					<div>
						Close Order
					</div>
				</div>
			</div>
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
