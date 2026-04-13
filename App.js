import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { persistor, store } from './src/store';
import ProductList from './src/screens/ProductList';
import CartScreen from './src/screens/CartScreen';

const Tab = createBottomTabNavigator();

function AppTabs() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );
  const badgeLabel = cartCount > 99 ? '99+' : cartCount;

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f8f9fa' },
          headerTitleStyle: { fontWeight: '700' },
          tabBarActiveTintColor: '#1f6feb',
          tabBarInactiveTintColor: '#7d8590',
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductList}
          options={{
            tabBarIcon: () => <Text>🛍️</Text>,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: () => <Text>🛒</Text>,
            tabBarBadge: cartCount > 0 ? badgeLabel : undefined,
            tabBarBadgeStyle: { backgroundColor: '#ef4444', color: '#ffffff' },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppTabs />
      </PersistGate>
    </Provider>
  );
}
