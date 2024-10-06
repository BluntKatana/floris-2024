import { cn } from "@/utils/style";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type MDXLinkProps = {
  icon?: ReactNode;
} & ComponentProps<typeof Link>;

/**
 * Component which renders an anchor tag with a small icon next to it
 */
export function MDXLink({ icon, ...linkProps }: MDXLinkProps) {
  return (
    <Link
      {...linkProps}
      className={cn("items-center space-x-1", linkProps.className)}
    >
      {icon && (
        <span className="inline-block [&>svg]:size-6 rounded-sm overflow-hidden translate-y-[6px] w-fit h-fit">
          {icon}
        </span>
      )}
      <span>{linkProps.children}</span>
    </Link>
  );
}
