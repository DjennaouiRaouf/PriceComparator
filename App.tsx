import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import loginPage from './components/pages/login_page/LoginPage';
import signUpPage from './components/pages/sign_up_page/SignUpPage';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={loginPage} />
        <Stack.Screen name="sign_up" component={signUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
