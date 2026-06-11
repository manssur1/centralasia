# CentralAsiaEnergetics Catalog

Статический сайт каталога кабеля, провода и кабеленесущих систем.

## Файлы

- `index.html` - разметка сайта
- `styles.css` - адаптивный дизайн
- `app.js` - товары, кабеленесущие системы, фильтры, заявка и Supabase JWT Auth
- `assets/` - локальные изображения для hero и карточек
- `site-preview.png` - desktop preview
- `site-preview-mobile.png` - mobile preview
- `supabase-jwt-auth.sql` - миграция, чтобы заявки принимались только с JWT

## Как открыть

Открой `index.html` в браузере. Для локального сервера можно запустить:

```bash
python -m http.server 8080
```

и перейти на `http://localhost:8080`.

## Следующий шаг

Supabase уже подготовлен в `app.js`. Локальный каталог содержит 54 позиции; если Supabase отдаст меньше строк, фронтенд сохранит локальные новые позиции и объединит их с базой.

1. В Supabase SQL Editor запусти `supabase-schema.sql`.
2. В `app.js` заполни `SUPABASE_CONFIG.url` значением вида `https://xxxx.supabase.co`.
3. На фронтенде используется только `sb_publishable_...`.

## JWT авторизация

Фронтенд использует Supabase Auth через `/auth/v1`: регистрация, вход, refresh token и logout. Access token хранится в `localStorage` и отправляется в REST-запросах как `Authorization: Bearer <jwt>`.

Если таблицы уже созданы, запусти в Supabase SQL Editor только `supabase-jwt-auth.sql`. После этого отправка заявок будет доступна только пользователям, которые вошли через Supabase Auth.

В Supabase Dashboard проверь: Authentication -> Providers -> Email должен быть включен. Если включено подтверждение email, после регистрации нужно подтвердить почту и затем войти.

Не добавляй секретные Supabase-ключи и пароль проекта в GitHub/Render Static Site. Эти данные нужны только для серверного кода или админских операций.

## Если Supabase Dashboard ругается на removeChild

Это ошибка интерфейса Dashboard, часто из-за автоперевода Chrome или расширений.

Что сделать:

1. Отключи перевод страницы для `supabase.com`.
2. Обнови Dashboard через `Ctrl+F5`.
3. Если ошибка осталась, открой Supabase в режиме инкогнито без расширений.
4. Зайди в SQL Editor, создай новый query, вставь `supabase-schema.sql` и нажми Run.

Если Dashboard все равно падает, схему можно применить через прямое PostgreSQL-подключение.
