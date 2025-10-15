// API Response Types

// Базовые типы для элементов с состоянием
export interface EnabledItem {
  enabled: boolean;
  label: string;
}

export interface EnabledItemWithUrl extends EnabledItem {
  url: string;
}

// Типы для кнопок загрузки
export interface DownloadButtons {
  ios: EnabledItem;
  android: EnabledItem;
  apk: EnabledItem;
}

// Типы для сайдбара
export interface Sidebar {
  download_app: EnabledItem;
  watch_video: EnabledItemWithUrl;
  qr_code: EnabledItemWithUrl;
}

// Типы для социальных сетей
export interface SocialLinks {
  vk: EnabledItemWithUrl;
  telegram: EnabledItemWithUrl;
  dzen: EnabledItemWithUrl;
  vkVideo: EnabledItemWithUrl;
}

// Основные данные главной страницы
export interface MainData {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttons: DownloadButtons;
  sidebar: Sidebar;
  socials: SocialLinks;
}

export interface Review {
  id: number;
  photo: string;
  name: string;
  date: string;
  text: string;
}

export interface SliderData {
  enabled: boolean;
  title: string;
  description: string;
  count: number;
  data: Review[];
}

export interface MenuItem {
  id: number;
  label: string;
  link: string;
}

export interface NavigationData {
  logo: {
    text: string;
    link: string;
  };
  menu: MenuItem[];
}

// API Error Type
export interface ApiError {
  message: string;
  status?: number;
}
