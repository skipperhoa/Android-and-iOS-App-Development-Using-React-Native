import { Tabs } from 'expo-router';
import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome5,Ionicons,FontAwesome,AntDesign,MaterialIcons
} from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: true,
      title: "",
      tabBarActiveTintColor: "#000", 
      tabBarInactiveTintColor: "#fff",
      
      headerStyle: {
        backgroundColor: "#027DFC",
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      tabBarStyle: {
        backgroundColor: "#027DFC",
      },
      tabBarIconStyle: { 
        width: 30,
        height: 30,
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: '',
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={focused ? 'home' : 'home'} color={color} size={24} />
          ),
          headerLeft: () => (
            <View className="w-full flex-row justify-between items-center">
              <View className='px-4'>
                <View className="flex-row items-center gap-2">
                  <TouchableOpacity>
                    <MaterialIcons name="menu-open" size={28} color="white" />
                  </TouchableOpacity>
                  <Text className="font-bold text-white text-2xl">
                    Shop Car
                  </Text>
                </View>
              </View>
            </View>
          ),
          headerRight: () => (
          <View className='px-4'>
              <View className="flex-row items-center gap-4">
              <TouchableOpacity>
                <View className="relative">
                  <View className="w-5 h-5 absolute z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                    <Text className="font-bold text-white text-sm">10</Text>
                  </View>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="relative">
                  <View className="w-5 h-5 absolute  z-10 -top-2 -right-2 rounded-full bg-red-500 flex-col justify-center items-center">
                    <Text className="font-bold text-white text-sm">1</Text>
                  </View>
                  <Ionicons name="cart-outline" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? 'list-alt' : 'list-alt'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: 'QR Code',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'qrcode' : 'qrcode'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Tin nhắn',
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'message1' : 'message1'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Cài đặt',
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: 'black',
            backgroundColor: 'yellow',
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'setting' : 'setting'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}