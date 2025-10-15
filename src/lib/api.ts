import { MainData, SliderData, NavigationData } from "@/types";

const API_BASE_URL = "https://revmo-api.netlify.app";

class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function fetchApi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: { revalidate: 3600 }, // Кешируем на 1 час для SSR
    });

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      `Failed to fetch data from ${endpoint}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export const api = {
  // Получение данных для главной страницы
  async getMainData(): Promise<MainData> {
    return fetchApi<MainData>("/api/main");
  },

  // Получение данных для слайдера отзывов
  async getSliderData(): Promise<SliderData> {
    return fetchApi<SliderData>("/api/slider");
  },

  // Получение данных для навигации
  async getNavigationData(): Promise<NavigationData> {
    return fetchApi<NavigationData>("/api/navigation");
  },
};

// Экспортируем типы ошибок
export { ApiError };
