import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash } from '../views';
import { TRootStackParamList } from './routes.types';
import { RealmProvider } from '../contexts/realm.context';
import { realmConfig } from '../repositories/items';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const AppRoutes = (): React.ReactElement => (
  <RealmProvider config={realmConfig}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </RealmProvider>
);
