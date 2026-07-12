import type { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "danger";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-slate-100 text-slate-700",

    success:
      "bg-emerald-100 text-emerald-700",

    info:
      "bg-sky-100 text-sky-700",

    warning:
      "bg-amber-100 text-amber-700",

    danger:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full
        px-3 py-1
        text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}