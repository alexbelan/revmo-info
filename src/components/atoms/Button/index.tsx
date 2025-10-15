import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  variant = "primary",
  href,
  onClick,
}) => {
  // Если есть href, рендерим как ссылку
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Иначе рендерим как кнопку
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
