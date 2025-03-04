# 🌍 Vue + PHP Distance Calculator

An application to calculate the distance between two geographical points, built in Vue 3 + Vite (frontend) and PHP (backend).

## 📚 Technologies

🟢 Frontend: Vue 3 + Vite + TypeScript  
🟣 Backend: PHP  
🔵 Unit tests: Vitest  
🔴 End-to-end tests: Cypress

## 🚀 Running the application

1. Clone the repository:

```sh
git clone https://github.com/magwww/php-vue-distance-calc.git
cd php-vue-distance-calc
```

2. Running the frontend (Vue 3)
   Requirements: Node.js (>=18), npm/yarn/pnpm

```sh
cd frontend
npm install
npm run dev
```

The application will be available at: http://localhost:5173

3. Running the backend (PHP)
   Requirements: PHP 8.1+, serwer np. PHP Built-in

```sh
cd backend
php -S localhost:8000
```

Backend will be available at: http://localhost:8000

## 🧪 Testing

🔹 Unit Testing (Vitest)

```sh
cd frontend
npm run test:unit
```

🔹 End-to-end Testing (Cypress)

```sh
cd frontend
npx cypress open
```

Cypress will open a test window where you can run tests.

## 📜 API

| Method |   Endpoint    |                Description                 |
| :----: | :-----------: | :----------------------------------------: |
|  POST  | /distance.php | Calculates the distance between two points |

🔹 Sample query

```json
{
  "point1": { "lat": 52.2298, "lng": 21.0122 },
  "point2": { "lat": 41.9028, "lng": 12.4964 }
}
```

🔹 Sample response

```json
{
  "m": 1318702.21,
  "km": 1318.7
}
```
