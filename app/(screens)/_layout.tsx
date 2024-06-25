import { Stack } from 'expo-router';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';

// icon
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Layout() {
  const router = useRouter();
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
        headerLeft: () => <Ionicons name="menu-outline" size={24} color="black" onPress={()=>router.push('menu')} />,
        headerRight: () => <TouchableOpacity>
            <View>
                <Image style={{width: 40, height: 40, borderRadius: 10}} source={{uri:'https://hoanguyenit.com/images/hoanguyencoder.jpg'}} />
            </View>
        </TouchableOpacity>,
      }} />
        <Stack.Screen name="menu" options={{
        headerShown: true,
        title: 'Menu',
        headerLeft: () => <Ionicons name="chevron-back" size={24} color="black" onPress={() => router.back()} />,

        headerRight: () => <TouchableOpacity>
            <View>
            <AntDesign name="filter" size={24} color="black" />
            </View>
        </TouchableOpacity>,
      }} />
      <Stack.Screen name="detail" options={{
        headerShown: false,
        title: '',
      }} />
       <Stack.Screen name="cart" options={{
        headerShown: true,
        title: 'Carts',
      }} />
       <Stack.Screen name="profile" options={{
        headerShown: true,
        title: '',
        headerLeft: () => <AntDesign name="profile" size={24} color="black" onPress={() => router.back()} />,
      }} />
       <Stack.Screen name="settings" options={{
        headerShown: false,
        title: '',
        headerLeft: () => <AntDesign name="profile" size={24} color="black" onPress={() => router.back()} />,
      }} />
       <Stack.Screen name="messages" options={{
        headerShown: false,
        title: '',
      
      }} />
    </Stack>
  );
}
