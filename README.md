# 🌍 Vue + PHP Distance Calculator

Aplikacja do obliczania odległości między dwoma punktami geograficznymi, zbudowana w Vue 3 + Vite (frontend) oraz PHP (backend).

## 📚 Technologie

🟢 Frontend: Vue 3 + Vite + TypeScript  
🟣 Backend: PHP  
🔵 Testy jednostkowe: Vitest  
🔴 Testy end-to-end: Cypress

## 🚀 Uruchamianie aplikacji

1. Sklonuj repozytorium:

```sh
git clone https://github.com/magwww/php-vue-distance-calc.git
cd php-vue-distance-calc
```

2. Uruchomienie frontend (Vue 3)
   Wymagania: Node.js (>=18), npm/yarn/pnpm

```sh
cd frontend
npm install
npm run dev
```

Aplikacja będzie dostępna na: http://localhost:5173

3. Uruchomienie backend (PHP)
   Wymagania: PHP 8.1+, serwer np. PHP Built-in

```sh
cd backend
php -S localhost:8000
```

Backend będzie dostępny na: http://localhost:8000

## 🧪 Testowanie

🔹 Testy jednostkowe (Vitest)

```sh
cd frontend
npm run test:unit
```

🔹 Testy end-to-end (Cypress)

```sh
cd frontend
npx cypress open
```

Cypress otworzy okno testowe, gdzie można uruchomić testy.

## 📜 API

| Metoda |   Endpoint    |                  Opis                   |
| :----: | :-----------: | :-------------------------------------: |
|  POST  | /distance.php | Oblicza odległość między dwoma punktami |

🔹 Przykładowe zapytanie

```json
{
  "point1": { "lat": 52.2298, "lng": 21.0122 },
  "point2": { "lat": 41.9028, "lng": 12.4964 }
}
```

🔹 Przykładowa odpowiedź

```json
{
  "m": 1318702.21,
  "km": 1318.7
}
```
