import Image from "next/image";

interface MarqueeImageProps {
  src: string;
  alt: string;
  size: number;
}

export function MarqueeImage({ src, alt, size }: MarqueeImageProps) {
  // rotate between -2 and 2 degrees
  const rotate = Math.random() * 4 - 2;

  return (
    <div
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        rotate: `${rotate}deg`,
      }}
      className="brightness-[var(--image-brightness)] hover:brightness-[var(--image-brightness-hover)] relative bg-accent hover:-translate-y-4 hover:scale-110 hover:-rotate-3 transition-all in-out rounded-md duration-200 overflow-hidden origin-bottom"
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
