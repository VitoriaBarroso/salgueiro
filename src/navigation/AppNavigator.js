import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          animation: 'fade', 
          headerStyle: {
            backgroundColor: '#7A1C2C', 
          },
          headerTintColor: '#F9F6F0', 
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Sobre" 
          component={Sobre} 
          options={{ title: 'Sobre o Salgueiro' }} 
        />
        <Stack.Screen 
          name="Contato" 
          component={Contato} 
          options={{ title: 'Contato' }} 
        />
        <Stack.Screen 
          name="Sair" 
          component={Login} 
          options={{ headerShown: false }} 
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}