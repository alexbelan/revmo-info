# Revmo.info

Современное веб-приложение для презентации мобильного приложения Revmo, построенное на Next.js 15 с использованием принципов Atomic Design.

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка и запуск

1. **Клонируйте репозиторий**

   ```bash
   git clone <repository-url>
   cd revmo_info
   ```

2. **Установите зависимости**

   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки**

   ```bash
   npm run dev
   ```

4. **Откройте браузер**
   ```
   http://localhost:3000
   ```

### Другие команды

```bash
# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm run start

# Линтинг кода
npm run lint

# Автоматическое исправление ошибок линтера
npm run lint:fix

# Проверка линтера без предупреждений
npm run lint:check
```

## 🏗️ Архитектура проекта

Проект построен на основе **Atomic Design** методологии, которая обеспечивает модульность, переиспользуемость и масштабируемость компонентов.

### Структура компонентов

```
src/components/
├── atoms/           # Базовые UI элементы
│   ├── Button/      # Кнопки
│   ├── Card/        # Карточки
│   ├── Container/   # Контейнеры
│   └── IconButton/  # Кнопки с иконками
├── molecules/       # Комбинации атомов
│   ├── Logo/        # Логотип
│   ├── DesktopMenu/ # Десктопное меню
│   ├── MobileMenu/  # Мобильное меню
│   └── SocialLinks/ # Социальные ссылки
└── organisms/       # Сложные компоненты
    ├── Header/      # Шапка сайта
    ├── MainSection/ # Главная секция
    ├── ReviewsSection/ # Секция отзывов
    └── Footer/      # Подвал сайта
```

### Принципы Atomic Design

- **Atoms (Атомы)** - Базовые HTML элементы (кнопки, инпуты, лейблы)
- **Molecules (Молекулы)** - Простые группы UI элементов (поиск, навигация)
- **Organisms (Организмы)** - Сложные компоненты (шапка, футер, формы)
- **Pages (Страницы)** - Конкретные экземпляры с данными из API

### Технологический стек

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + PostCSS
- **Icons**: SVG с поддержкой @svgr/webpack
- **Linting**: ESLint с конфигурацией Next.js
- **API**: REST API с кешированием (revalidate: 3600)

## 📁 Структура проекта

```
revmo_info/
├── public/                 # Статические файлы
│   ├── fonts/             # Шрифты Lato
│   ├── icons/             # SVG иконки
│   ├── img/               # Изображения
│   └── video/             # Видео файлы
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Глобальные стили
│   │   ├── layout.tsx     # Корневой layout
│   │   └── page.tsx       # Главная страница
│   ├── components/        # React компоненты (Atomic Design)
│   ├── lib/               # Утилиты и API
│   ├── types/             # TypeScript типы
│   └── assets/            # Ресурсы приложения
├── eslint.config.mjs      # Конфигурация ESLint
├── next.config.ts         # Конфигурация Next.js
├── postcss.config.mjs     # Конфигурация PostCSS
└── tsconfig.json          # Конфигурация TypeScript
```

## 🔧 API интеграция

Проект интегрирован с внешним API для получения данных:

- **Base URL**: `https://revmo-api.netlify.app`
- **Endpoints**:
  - `/api/main` - данные главной страницы
  - `/api/slider` - данные слайдера отзывов
  - `/api/navigation` - данные навигации

### Обработка ошибок

- Graceful fallback при недоступности API
- Кеширование данных на 1 час для SSR
- Типизированные ошибки с ApiError классом

## 🎨 Стилизация

- **CSS Modules** для изоляции стилей компонентов
- **PostCSS** с поддержкой вложенности и импортов
- **CSS переменные** для темизации и цветовой схемы
- **Кастомные шрифты** Lato с полным набором весов

## 📱 Адаптивность

Проект полностью адаптивен и поддерживает:

- Мобильные устройства (320px+)
- Планшеты (768px+)
- Десктопы (1024px+)
- Большие экраны (1440px+)

## 🚀 Деплой

Проект готов для деплоя на:

- Vercel (рекомендуется)
- Netlify
- Любую платформу, поддерживающую Next.js

```bash
# Сборка для продакшена
npm run build

# Файлы готовы в папке .next/
```

## 📝 Разработка

### Добавление новых компонентов

1. **Atom**: Создайте в `src/components/atoms/ComponentName/`
2. **Molecule**: Создайте в `src/components/molecules/ComponentName/`
3. **Organism**: Создайте в `src/components/organisms/ComponentName/`

Каждый компонент должен содержать:

- `index.tsx` - основной файл компонента
- `ComponentName.module.css` - стили компонента

### Типизация

Все компоненты должны быть типизированы с использованием TypeScript интерфейсов из `src/types/index.ts`.

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект использует лицензию MIT. См. файл `LICENSE` для подробностей.
