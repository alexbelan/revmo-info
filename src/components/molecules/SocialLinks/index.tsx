import React from "react";

import TelegramIcon from "@/assets/icons/telegram.svg";
import VkIcon from "@/assets/icons/vk.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import ZenIcon from "@/assets/icons/zen.svg";
import IconButton from "@/atoms/IconButton";
import { MainData } from "@/types";

import styles from "./SocialLinks.module.css";


interface SocialLinksProps {
  mainData?: MainData | null;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  mainData,
  className = "",
}) => {
  return (
    <div className={`${styles.socialIcons} ${className}`}>
      {mainData?.socials.vk.enabled && (
        <IconButton
          href={mainData.socials.vk.url}
          variant="ghost"
          size="small"
          icon={<VkIcon />}
          className={styles.socialIcon}
        />
      )}
      {mainData?.socials.telegram.enabled && (
        <IconButton
          href={mainData.socials.telegram.url}
          variant="ghost"
          size="small"
          icon={<TelegramIcon />}
          className={styles.socialIcon}
        />
      )}
      {mainData?.socials.dzen.enabled && (
        <IconButton
          href={mainData.socials.dzen.url}
          variant="ghost"
          size="small"
          icon={<ZenIcon />}
          className={styles.socialIcon}
        />
      )}
      {mainData?.socials.vkVideo.enabled && (
        <IconButton
          href={mainData.socials.vkVideo.url}
          variant="ghost"
          size="small"
          icon={<YoutubeIcon />}
          className={styles.socialIcon}
        />
      )}
    </div>
  );
};

export default SocialLinks;
