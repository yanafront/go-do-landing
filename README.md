# GoDo Landing Page

Платформа для быстрого заработка и поиска исполнителей в Telegram.

## 🚀 Развертывание на Vercel

### Автоматическое развертывание

1. **Подключите репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Нажмите "New Project"
   - Подключите ваш GitHub репозиторий
   - Vercel автоматически определит настройки

2. **Настройки сборки:**
   - **Build Command:** `npm run vercel-build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Ручное развертывание

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт:**
   ```bash
   vercel login
   ```

3. **Разверните проект:**
   ```bash
   vercel
   ```

4. **Для продакшена:**
   ```bash
   vercel --prod
   ```

## 🛠 Локальная разработка

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Запустите в режиме разработки:**
   ```bash
   npm run dev
   ```

3. **Откройте в браузере:**
   ```
   http://localhost:9000
   ```

## 📁 Структура проекта

```
├── api/                 # Vercel API routes
├── client/              # React приложение
│   ├── src/
│   │   ├── components/  # React компоненты
│   │   ├── pages/       # Страницы
│   │   └── ...
├── server/              # Express сервер
├── dist/                # Собранные файлы
├── vercel.json          # Конфигурация Vercel
└── package.json
```

## 🔧 Технологии

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express.js, Node.js
- **Роутинг:** Wouter
- **UI:** Radix UI, Lucide React
- **Деплой:** Vercel

## 📱 Страницы

- `/` - Главная страница
- `/employers` - Для работодателей
- `/workers` - Для исполнителей
- `/user-agreement` - Пользовательское соглашение
- `/privacy-policy` - Политика конфиденциальности

## 🌐 Переменные окружения

Для продакшена на Vercel добавьте в настройки проекта:

- `NODE_ENV=production`

## 📞 Контакты

Telegram: [@proxiDBot](https://t.me/proxiDBot)
