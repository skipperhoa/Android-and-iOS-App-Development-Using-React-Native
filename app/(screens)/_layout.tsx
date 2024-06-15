import { Stack } from 'expo-router';
import { View, Image } from 'react-native';

// icon
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{
        headerShown: true,
        title: 'App Food',
        headerLeft: () => <Ionicons name="menu-outline" size={24} color="black" />,
        headerRight: () => <TouchableOpacity>
            <View>
                <Image style={{width: 40, height: 40, borderRadius: 10}} source={{uri:'https://hoanguyenit.com/images/hoanguyencoder.jpg'}} />
            </View>
        </TouchableOpacity>,
      }} />
    </Stack>
  );
}
