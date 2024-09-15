import Image from "next/image";
import { cn } from "../utils/style";

interface MarqueeImageProps {
  src: string;
  alt: string;
  size: "md" | "lg";
}

export function MarqueeImage({ src, alt, size }: MarqueeImageProps) {
  // rotate between -2 and 2 degrees
  const rotate = Math.random() * 4 - 2;

  const classes: Record<MarqueeImageProps["size"], string> = {
    md: "size-[150px] sm:size-[175px] md:size-[200px]",
    lg: "size-[200px] sm:size-[225px] md:size-[250px]",
  };

  return (
    <div
      style={{
        rotate: `${rotate}deg`,
      }}
      className={cn(
        "brightness hover:brightness-hover relative bg-accent hover:-translate-y-2 hover:scale-110 hover:-rotate-3 transition-all in-out rounded-md duration-200 overflow-hidden origin-bottom",
        classes[size]
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-left-center"
      />
    </div>
  );
}
