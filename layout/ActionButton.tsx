import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "white" | "zoom";

interface ActionButtonProps {
  text?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  variant?: ButtonVariant;
  icon?: React.ReactNode; // <-- optional icon
}

const ActionButton = ({
  text = "View All Stories",
  href = "#",
  onClick,
  variant = "primary",
  icon,
}: ActionButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-2xl hover:shadow-blue-600",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-600",
    white:
      "border border-white text-white bg-[#5865F0] hover:text-blue-600 hover:bg-white",
    zoom:
      "text-blue-600 bg-white hover:scale-110 hover:shadow-2xl",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition",
        variants[variant]
      )}
    >
      {text}
      {/* ICON SHARTLI RENDER */}
      {icon && <span className="transition">{icon}</span>}
    </Link>
  );
};

export default ActionButton;
