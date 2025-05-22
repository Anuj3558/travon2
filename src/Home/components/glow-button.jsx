import React from "react";
import { cva } from "class-variance-authority";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const glowButtonVariants = cva(
  cn(
    "relative cursor-pointer transition-all duration-500",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
    "text-sm font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "overflow-hidden",
    "border border-transparent",
    // Glow effect container
    "before:absolute before:content-[''] before:inset-0 before:rounded-[inherit]",
    // Initial glow position (top-right)
    "before:bg-[length:200%_200%] before:bg-[position:100%_0%]",
    "before:bg-gradient-to-r before:from-cyan-500 before:via-blue-500 before:to-cyan-400",
    "before:opacity-70 before:transition-all before:duration-500",
    // Hover state - full glow
    "hover:before:opacity-100 hover:before:bg-[position:0%_0%]",
    // Inner content container
    "after:absolute after:content-[''] after:inset-[2px] after:rounded-[inherit] after:bg-[#0a0a0a] after:z-[1]",
    "text-white z-10",
    "[&>span]:relative [&>span]:z-10"
  ),
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent",
      },
      size: {
        default: "h-10 px-10 py-7",
        sm: "h-8 px-4 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const GlowButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={glowButtonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };