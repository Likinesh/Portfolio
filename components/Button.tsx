import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function Button({ 
  className = "", 
  variant = "default", 
  href, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  
  let variantClasses = "";
  if (variant === "default") {
    variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
  } else if (variant === "outline") {
    variantClasses = "border border-input bg-background hover:bg-accent/10 hover:text-accent";
  } else if (variant === "ghost") {
    variantClasses = "hover:bg-accent/10 hover:text-accent";
  } else if (variant === "link") {
    variantClasses = "text-primary underline-offset-4 hover:underline";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    const isInternal = href.startsWith("/") && !props.download && !href.startsWith("/#") && !href.endsWith('.pdf');
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses} {...(props as any)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
