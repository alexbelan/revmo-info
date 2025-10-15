import Image from "next/image";
import React from "react";

import CalendarIcon from "@/assets/icons/calendar.svg";
import Card from "@/atoms/Card";

import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  name: string;
  date: string;
  text: string;
  avatar?: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  text,
  avatar,
  className = "",
}) => {
  return (
    <div className={`${styles.reviewCard} ${className}`}>
      <Card size="auto" background="default" className={styles.outerCard}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            {avatar && (
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className={styles.avatar}
              />
            )}
            <span className={styles.name}>{name}</span>
          </div>
          <div className={styles.dateInfo}>
            <span className={styles.date}>{date}</span>
            <CalendarIcon />
          </div>
        </div>

        <Card size="auto" background="default" className={styles.innerCard}>
          <p className={styles.reviewText}>{text}</p>
        </Card>
      </Card>
    </div>
  );
};

export default ReviewCard;
