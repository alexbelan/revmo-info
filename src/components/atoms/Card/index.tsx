import React from "react";

import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "auto";
  background?: "default" | "blur" | "custom";
  customBackground?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  size = "medium",
  background = "default",
  customBackground,
  className = "",
  onClick,
}) => {
  const cardClassName = `${styles.card} ${styles[size]} ${styles[background]} ${className}`;

  return (
    <div className={cardClassName} onClick={onClick}>
      {background === "custom" && customBackground && (
        <div className={styles.customBackground}>{customBackground}</div>
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
