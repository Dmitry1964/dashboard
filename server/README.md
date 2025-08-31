# Express MongoDB Backend

Backend проект, построенный с использованием Express.js, MongoDB, Mongoose и TypeScript.

## 🚀 Возможности

- **Express.js** - веб-фреймворк для Node.js
- **MongoDB** - NoSQL база данных
- **Mongoose** - ODM для MongoDB
- **TypeScript** - типизированный JavaScript
- **JWT аутентификация** - безопасная авторизация
- **Валидация данных** - проверка входящих данных
- **Обработка ошибок** - централизованная обработка ошибок
- **CORS** - поддержка кросс-доменных запросов
- **Helmet** - безопасность HTTP заголовков

## 📋 Требования

- Node.js (версия 16 или выше)
- MongoDB (локально или в облаке)
- npm или yarn

## 🛠️ Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone <your-repo-url>
   cd express-mongodb-backend
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Создайте файл .env:**
   ```bash
   cp env.example .env
   ```
   
   Отредактируйте `.env` файл, указав ваши настройки:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your_database
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

4. **Запустите MongoDB:**
   Убедитесь, что MongoDB запущена и доступна по указанному URI.

## 🚀 Запуск

### Режим разработки
```bash
npm run dev
```

### Продакшн режим
```bash
npm run build
npm start
```

## 📚 API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация пользователя
- `POST /api/auth/login` - Вход пользователя
- `GET /api/auth/me` - Получить текущего пользователя

### Пользователи
- `GET /api/users` - Получить всех пользователей
- `GET /api/users/:id` - Получить пользователя по ID
- `POST /api/users` - Создать нового пользователя
- `PUT /api/users/:id` - Обновить пользователя
- `DELETE /api/users/:id` - Удалить пользователя

## 🔐 Аутентификация

API использует JWT токены для аутентификации. Добавьте заголовок:
```
Authorization: Bearer <your_jwt_token>
```

## 📁 Структура проекта

```
src/
├── config/          # Конфигурация (база данных)
├── controllers/     # Контроллеры
├── middleware/      # Middleware (аутентификация, валидация, обработка ошибок)
├── models/          # Mongoose модели
├── routes/          # Маршруты API
└── index.ts         # Главный файл приложения
```

## 🧪 Тестирование

```bash
npm test
```

## 📝 Скрипты

- `npm run dev` - Запуск в режиме разработки с hot reload
- `npm run build` - Сборка TypeScript в JavaScript
- `npm start` - Запуск собранного приложения
- `npm test` - Запуск тестов

## 🔧 Настройка TypeScript

Проект настроен с строгими правилами TypeScript для обеспечения качества кода. Основные настройки находятся в `tsconfig.json`.

## 🚨 Безопасность

- Helmet для защиты HTTP заголовков
- CORS настройки
- Валидация входящих данных
- Хеширование паролей с bcrypt
- JWT токены с истечением срока действия

## 📄 Лицензия

MIT
