import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ActionButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "ghost";
  }
>;

export function ActionButton({
  children,
  className = "",
  variant = "solid",
  ...props
}: ActionButtonProps) {
  const variantClass = variant === "ghost" ? "ghost-button" : "";

  return (
    <button
      className={`action-button ${variantClass} ${className}`.trim()}
      type="button"
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
