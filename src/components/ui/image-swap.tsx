import * as React from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface ImageSwapProps extends React.HTMLAttributes<HTMLDivElement> {
	alt: string;
	src: StaticImageData;
	hoverSrc: StaticImageData;
	hovering?: boolean;
}

const ImageSwap = React.forwardRef<HTMLDivElement, ImageSwapProps>(
	({ className, alt, src, hoverSrc, hovering, ...props }, ref) => {
		const useExternalHover = hovering !== undefined;

		return (
			<div
				ref={ref}
				className={cn(
					"group relative overflow-hidden rounded-xl border w-full h-full",
					className,
				)}
				{...props}
			>
				<Image
					src={src}
					width={600}
					height={750}
					alt={alt}
					priority
					className={cn(
						"block transition-all w-full h-full object-cover duration-700",
						useExternalHover ?
							hovering ? "opacity-0 scale-100"
							:	"opacity-100 scale-105"
						:	"group-hover:opacity-0 scale-105 group-hover:scale-100",
					)}
				/>

				<Image
					src={hoverSrc}
					width={600}
					height={750}
					alt={alt}
					className={cn(
						"w-full h-full duration-700 absolute inset-0 object-cover transition-all",
						useExternalHover ?
							hovering ? "opacity-100 scale-100"
							:	"opacity-0 scale-105"
						:	"scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100",
					)}
				/>
			</div>
		);
	},
);
ImageSwap.displayName = "ImageSwap";

export { ImageSwap };
