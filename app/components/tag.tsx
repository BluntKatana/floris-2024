import { cn } from "../utils/style";

type TagProps = {
  number: 1 | 2;
  children: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
};

export function Tag({
  number,
  children,
  className,
  onClick,
  active,
}: TagProps) {
  const classes: Record<TagProps["number"], string> = {
    1: cn("active:bg-tag-1-active border-tag-1", {
      "bg-tag-1-active border-tag-1-active": active,
    }),
    2: cn("active:bg-tag-2-active border-tag-2", {
      "bg-tag-2-active border-tag-2-active": active,
    }),
  };

  return (
    <button
      className={cn(
        "relative px-3 py-1 rounded-lg w-fit border border-solid transition-colors in-out duration-200 text-foreground",
        classes[number],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
