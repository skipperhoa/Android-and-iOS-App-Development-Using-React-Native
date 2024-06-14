import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
export default function TabLayout() {
  const router = useRouter()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          paddingBottom: 0,
          paddingTop: 0,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "transparent",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "",
          tabBarIcon: ({ color }) => (
            <View className="w-full flex flex-col items-center">
              <FontAwesome size={20} name="home" color={color} />
              <Text className="font-bold text-black text-[11px]">Home</Text>
            </View>
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity className="rounded-md  ml-4">
                <View className="flex flex-row items-center justify-center gap-1">
                  <Image
                    source={{
                      uri: "https://hoanguyenit.com/images/hoanguyencoder.jpg",
                    }}
                    className="w-8 h-8 rounded-full"
                  />
                  <Text className="text-2xl text-blue-600 font-bold pl-1">
                    Market
                  </Text>
                </View>
              </TouchableOpacity>
            );
          },
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity className="w-10 h-10 mr-4 flex items-center justify-center rounded-full relative" onPress={()=>router.push('/cart')}>
                <View className="flex flex-row items-center justify-center gap-1">
                  <Feather name="shopping-cart" size={30} color="red" />
                  <View className="bg-red-500 rounded-full w-7 h-7 flex flex-col items-center justify-center absolute -right-3 -top-3">
                    <Text className="text-white font-bold text-xs">10</Text>
                  </View>
                 
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          headerStyle: {
            backgroundColor: "#2D46FC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "",
          tabBarIcon: ({ color }) => (
            <View className="w-full flex flex-col items-center">
              <FontAwesome6 name="list-alt" size={20} color={color} />
              <Text className="font-bold text-black text-[11px]">Menu</Text>
            </View>
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity className="rounded-md ml-4" onPress={()=>router.back()}>
                <View className="flex flex-row items-center justify-center gap-1">
                  <Entypo name="chevron-left" size={20} color="white" />
                  <Text className="text-xl text-white font-bold">
                    Categories
                  </Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#e5e7eb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "",
          tabBarIcon: ({ color }) => (
            <View className="w-full flex flex-col items-center">
              <Feather name="list" size={24} color="black" />
              <Text className="font-bold text-black text-[11px]">Products</Text>
            </View>
          ),

          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                className="w-full flex flex-col items-center justify-center rounded-full pl-4"
                onPress={() => router.back()}
              >
               <View className="w-full flex flex-row items-center">
                    <Ionicons name="chevron-back" size={24} color="black" />
                    <Text className="w-full font-bold text-black text-xl pl-2">Products</Text>
               </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,

          title: "",
          tabBarIcon: ({ color }) => (
            <View className="w-full flex flex-col items-center">
              <Ionicons name="settings-outline" size={20} color={color} />
              <Text className="font-bold text-black text-[11px]">Settings</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
