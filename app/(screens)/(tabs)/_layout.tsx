import { router, Tabs, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity ,TextInput, Image} from "react-native";
import { useSelector } from "react-redux";
import {
  FontAwesome5,Ionicons,FontAwesome,AntDesign,MaterialIcons,
  EvilIcons,Entypo
} from '@expo/vector-icons'
import { useFonts } from "expo-font";
import HomeHeaderLeft from '@/components/ui/header/HomeHeaderLeft';
import HomeHeaderRight from '@/components/ui/header/HomeHeaderRight';
export default function TabLayout() {
  
  // ...

  const router = useRouter();
  const [fontsLoaded, fontError] = useFonts({
      HelvetIns: require("@/assets/fonts/HelvetIns.ttf"),
      PlaywriteNL: require("@/assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
      Montserrat: require("@/assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    });
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      title: "",
      tabBarActiveTintColor: "#f9b10a", 
      tabBarInactiveTintColor: "#fff",
      
      headerStyle: {
        backgroundColor: "#027DFC",
        height:130
        
      },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      tabBarStyle: {
        position:'relative',
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
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: '',
          headerShown: false,
          tabBarLabel: 'Sản phẩm',
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
          title: "",
          tabBarLabel: 'Thông báo',
          headerStyle: {
            backgroundColor: "#027DFC",
           
          },
          headerShown: false,
          tabBarBadge: 3,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'message1' : 'message1'} color={color} size={24}/>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/")} className='px-2'>
              <View className='w-8 h-8 rounded-full flex-col justify-center items-center bg-blue-400'>
                  <Entypo name="chevron-left" size={28} color="white" />
              </View>
            </TouchableOpacity>
            
          ),
          headerTitle: () => (
               <View className='flex-row items-center gap-2'>
                  <Text className='font-bold text-white text-2xl' style={{fontFamily:'HelvetIns'}}>Thông báo</Text>
               </View>
             ),
          headerRight : () => (
            <TouchableOpacity className='px-2'>
              <View className='relative'>
                  <EvilIcons name="bell" size={30} color="white" />
                  <View className='absolute -top-2 right-0 w-5 h-5  flex-col justify-center items-center rounded-full bg-white'>
                     
                    <Text className='font-bold text-red-500 z-50 text-sm  text-center'>12</Text>
                  </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Cài đặt',
          tabBarBadge: 2,
          headerShown:false,
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