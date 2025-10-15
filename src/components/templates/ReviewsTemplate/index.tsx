import React from "react";

import ReviewsSection from "@/organisms/ReviewsSection";
import { NavigationData, SliderData } from "@/types";

import styles from "./ReviewsTemplate.module.css";

interface ReviewsTemplateProps {
  navigationData?: NavigationData | null;
  sliderData?: SliderData | null;
  className?: string;
}

const ReviewsTemplate: React.FC<ReviewsTemplateProps> = ({
  sliderData,
  className = "",
}) => {
  return (
    <div className={`${styles.reviewsTemplate} ${className}`}>
      <ReviewsSection sliderData={sliderData} />
    </div>
  );
};

export default ReviewsTemplate;
