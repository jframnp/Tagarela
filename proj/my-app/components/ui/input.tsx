import * as React from "react";
import { cn } from "@/lib/utils";

// Não é mais necessário criar uma interface vazia
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
