import { Stack } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import TabBottom from "@/components/TabBottom";
import TabScreen from "./(tabs)/_layout";
import { useRouter } from "expo-router";
export default function AppLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="home" options={{
        title: 'App Shop 2014',
         headerLeft: () => {
           return (
             <TouchableOpacity className="bg-gray-200 p-2 rounded-md">
               <View className='flex flex-row items-center justify-center gap-1'>
                 <MaterialCommunityIcons name="menu" size={24} color="black" />
               </View>
             </TouchableOpacity>
           )
         },
         headerShadowVisible:false,
         headerRight: () => {
          return (
            <TouchableOpacity className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
              <View className='flex flex-row items-center justify-center gap-1'>
              <EvilIcons name="bell" size={24} color="red" />
              </View>
            </TouchableOpacity>
          )
        },
       
      }}/> */}
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="products" />
      <Stack.Screen name="profile" />
      <Stack.Screen
        name="detail"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#e5e7eb",
          },
          headerShadowVisible: false,
          title: "",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-10 h-10 bg-white flex flex-col items-center justify-center rounded-full"
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
            );
          },

          headerRight: () => {
            return (
              <TouchableOpacity className="w-10 h-10 bg-white flex flex-col items-center justify-center rounded-full">
                <Ionicons name="share-social" size={24} color="blue" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#e5e7eb",
          },
          headerShadowVisible: false,
          title: "",

          headerLeft: () => {
            return (
              <TouchableOpacity
                className="flex items-center justify-center rounded-full"
                onPress={() => router.back()}
              >
                <View className="flex flex-row items-center">
                <Ionicons name="chevron-back" size={24} color="black" />
                <Text className="pl-2 font-bold text-xl">Carts</Text>
                </View>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity className="w-10 h-10 flex items-center justify-center rounded-full">
                <Ionicons name="list" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack>
  );
}
