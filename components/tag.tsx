import { cn } from "../utils/style";

type TagProps = {
  number: 1 | 2;
  children: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  size: "sm" | "md";
};

export function Tag({
  number,
  children,
  className,
  onClick,
  active,
  size,
}: TagProps) {
  const classes: Record<TagProps["number"], string> = {
    1: cn("active:bg-tag-1-active border-tag-1", {
      "bg-tag-1-active border-tag-1-active": active,
    }),
    2: cn("active:bg-tag-2-active border-tag-2", {
      "bg-tag-2-active border-tag-2-active": active,
    }),
  };

  const sizeClasses: Record<TagProps["size"], string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
  };

  if (!onClick) {
    return (
      <span
        className={cn(
          "rounded-lg w-fit border border-solid transition-colors in-out duration-200 text-foreground",
          sizeClasses[size],
          classes[number],
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <button
      className={cn(
        "relative rounded-lg w-fit border border-solid transition-colors in-out duration-200 text-foreground",
        sizeClasses[size],
        classes[number],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
