import React from "react";

import Button from "@/atoms/Button";

import styles from "./IconButton.module.css";

interface IconButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "children" | "variant"> {
  icon: React.ReactNode;
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  iconPosition = "right",
  variant = "primary",
  size = "medium",
  ...buttonProps
}) => {
  return (
    <Button
      {...buttonProps}
      className={`${styles.iconButton} ${styles[variant]} ${styles[size]} ${
        buttonProps.className || ""
      }`}
      variant={variant === "ghost" ? "secondary" : variant}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children && <span className={styles.text}>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </Button>
  );
};

export default IconButton;
