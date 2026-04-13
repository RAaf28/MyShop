# My Shop App

A React Native e-commerce cart simulation built with Expo and Redux Toolkit.

## Features

- Product list with dummy data
- Add product to cart
- Cart quantity controls (increment/decrement)
- Remove single product from cart
- Clear all cart items with confirmation
- Cart total calculation
- Cart tab badge with item count (`99+` cap)
- Persistent cart state using AsyncStorage + redux-persist

## Tech Stack

- Expo SDK 53
- React Native 0.79.6
- React 19
- Redux Toolkit
- React Redux
- React Navigation (Bottom Tabs)
- AsyncStorage
- redux-persist

## Project Structure

```text
my-shop-app/
├── src/
│   ├── store/
│   │   ├── index.js
│   │   └── cartSlice.js
│   ├── screens/
│   │   ├── ProductList.js
│   │   └── CartScreen.js
│   ├── components/
│   │   ├── ProductCard.js
│   │   └── CartItem.js
│   └── data/
│       └── products.js
├── App.js
└── package.json
```

## Installation

```bash
npm install
```

## Run

```bash
npx expo start -c
```

Then choose one of the targets:

- Android (Expo Go)
- iOS (Expo Go)
- Web

## Redux Implementation Summary

- `createSlice` used for `cartSlice`
- `configureStore` used in `src/store/index.js`
- `useSelector` used to read cart state in screens
- `useDispatch` used to dispatch cart actions

## Notes

If you see native module mismatch errors, run:

```bash
npx expo install --fix
```
