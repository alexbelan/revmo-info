import React from "react";

import PlayIcon from "@/assets/icons/play.svg";
import Card from "@/atoms/Card";
import IconButton from "@/atoms/IconButton";

import styles from "./VideoButton.module.css";

interface VideoCardProps {
  label?: string;
  videoUrl?: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  label = "смотреть видео о приложении",
  videoUrl,
  className = "",
}) => {
  return (
    <div className={`${styles.videoCard} ${className}`}>
      <Card size="small" className={styles.card}>
        <div className={styles.content}>
          <IconButton
            icon={<PlayIcon />}
            className={styles.playButton}
            href={videoUrl}
          ></IconButton>

          <div className={styles.textBlock}>
            <div className={styles.textLine}>{label}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VideoCard;
