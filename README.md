## Android and iOS App Development Using React Native
Please Like, Share, and Subscribe if you like the video :
👉 [Creator's Channel](https://www.youtube.com/channel/UCBOZRctXJSg9YNLyddedASg?sub_confirmation=1)
👉 [Link Video](https://www.youtube.com/watch?v=5KEwU71OX34&list=PLeoClvLfcvYp51LGAuf-ieM3NBAgX2AUA)
[![Android and iOS App Development Using React Native](https://github.com/skipperhoa/Android-and-iOS-App-Development-Using-React-Native/blob/react-native-shopcar/Demo/home.png)](https://www.youtube.com/watch?v=5KEwU71OX34&list=PLeoClvLfcvYp51LGAuf-ieM3NBAgX2AUA)

Nếu bạn thấy thú vị, thì đăng ký kênh ủng hộ tôi (If you find it interesting, then subscribe to my channel to support me)
- YouTube Channel: [Creator's Channel](https://www.youtube.com/channel/UCBOZRctXJSg9YNLyddedASg?sub_confirmation=1)
- TikTok: [@hoanguyencoder](https://www.tiktok.com/@hoanguyencoder)
- Twitter: [@skipperhoa](https://x.com/skipperhoa)
- Facebook Fanpage: [Fanpage](https://www.facebook.com/profile.php?id=100049475056780)
- Website: [hoanguyenit.com](https://hoanguyenit.com)

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).
## Get started
1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

### SETUP BOTTOM TAB
```
import { Tabs } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialIcons,MaterialCommunityIcons,AntDesign
} from "@expo/vector-icons";

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
          title: "",
          tabBarLabel: "Trang chủ",
         

          headerLeft: () => (
            <View className="w-full flex-row justify-between items-center">
              <View className="px-5">
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
            <View className="px-5">
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

          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "home" : "home"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Danh mục",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "list-alt" : "list-alt"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: "Quét mã",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "qrcode" : "qrcode"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Tin nhắn",
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "message1" : "message1"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Cài đặt",
          tabBarBadge: 1,
          tabBarBadgeStyle: {
            color: 'black',
            backgroundColor: 'yellow',
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={
                focused ? "setting" : "setting"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

# Demo
![hoanguyenit.com](https://github.com/skipperhoa/Android-and-iOS-App-Development-Using-React-Native/blob/react-native-shopcar/Demo/home.png)
![hoanguyenit.com](https://github.com/skipperhoa/Android-and-iOS-App-Development-Using-React-Native/blob/react-native-shopcar/Demo/Adding-Featured-Products.png)
![hoanguyenit.com](https://github.com/skipperhoa/Android-and-iOS-App-Development-Using-React-Native/blob/react-native-shopcar/Demo/Adding-carousel-Products.png)
