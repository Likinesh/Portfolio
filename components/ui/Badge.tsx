import React from "react";

export function Badge({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-4 py-1.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
