import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesProvider } from './src/screens/FavoritesContext';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ürün Kataloğu' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Ürün Detayı' }} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorilerim' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}