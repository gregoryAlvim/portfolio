import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-sm border border-foreground/10 bg-background px-4 py-5 font-light text-base outline-none placeholder:text-foreground/60 focus:border-purple-600 ",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
