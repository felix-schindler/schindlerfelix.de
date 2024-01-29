export default function Gallery({ images }: { images: string[] }) {
	return (
		<div class="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2.5">
			{images.map((src) => (
				<img
					src={src}
					class="h-full w-auto sm:max-w-50-calc"
					alt=""
					loading="lazy"
				/>
			))}
		</div>
	);
}
