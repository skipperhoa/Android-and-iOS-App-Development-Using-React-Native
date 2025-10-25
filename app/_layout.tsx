import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import "../global.css";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

/* import store */
import store from '@/redux';
import {Provider} from 'react-redux';
import {loginRequest, loginSuccess} from '@/redux/actions/authActions';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

/* test React Redux */
const data = {
  'email': 'abcdef@example.com',
  'password': '12345678'
}
//store.dispatch(loginSuccess(data));

/* test React Redux-saga */
//store.dispatch(loginRequest(data))


  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}