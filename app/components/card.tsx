import { PropsWithChildren } from "react";
import { cn } from "../utils/style";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  className,
  ...divProps
}: PropsWithChildren<CardProps>) {
  return (
    <div
      {...divProps}
      className={cn(
        "bg-card border border-solid border-card-border rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
