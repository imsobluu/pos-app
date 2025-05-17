export function handleImageError(event: Event) {
	const img = event.target as HTMLImageElement;
	img.src = "/placeholder.svg";
};