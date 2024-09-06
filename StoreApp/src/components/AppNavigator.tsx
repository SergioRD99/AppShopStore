// AppNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Drawer = createDrawerNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={DetailsScreen} />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
