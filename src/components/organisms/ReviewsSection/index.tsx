import React from "react";

import BackgroundBlurIcon from "@/atoms/BackgroundBlurIcon";
import ReviewCard from "@/molecules/ReviewCard";
import { SliderData } from "@/types";

import styles from "./ReviewsSection.module.css";

interface ReviewsSectionProps {
  sliderData?: SliderData | null;
  className?: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  sliderData,
  className = "",
}) => {
  if (!sliderData || !sliderData.enabled) {
    return null;
  }
  return (
    <div className={`${styles.reviewsSection} ${className}`}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <div className={styles.backgroundIcon}>
            <BackgroundBlurIcon />
          </div>
          <h1>{sliderData.title}</h1>
          <h2>{sliderData.description}</h2>
        </div>

        <div className={styles.reviewsContainer}>
          {sliderData.data.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              date={review.date}
              text={review.text}
              avatar={review.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
