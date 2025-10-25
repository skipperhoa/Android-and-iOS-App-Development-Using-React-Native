import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,Animated,Easing,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AUTH_TYPES } from "@/redux/constants/authTypes";

export default function App() {
  const refAnimatedValue = new Animated.Value(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading, error} = useSelector((state) => state.auth);

  const [numTime,setNumTime] = useState(5);

  // xử lý non-blocking giúp ích cho việc load mượt hơn
  useEffect(() => {
    console.log("Run start");
    let timer;
    if(user){
      checkAuthLoginAnimated();
    }
    timer = setInterval(() => {
          setNumTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
    console.log("we can call api fetch user info here,...");
    
    return () => clearInterval(timer);
  }, [user]);
  
  useEffect(() => {
    console.log("change numTime : ",numTime);
    if(numTime === 1){
      console.log("exit countdown and navigate to home");
      router.replace("/(screens)/(tabs)");
    }
  }, [numTime]);

  const formSlash = (
    <LinearGradient
      colors={["#0762f5", "#1f73fc", "#337ef9"]}
      style={{ width: "100%", height: "100%" }}
    >
      <View className="w-full flex-1 flex-row items-center justify-center relative">
        {/* LOGO & hiệu ứng tròn */}
        <View className="w-[100px] h-[100px] absolute z-50 bg-[#1a6ffd] rounded-full flex-row items-center justify-center">
          <Image
            source={require("@/assets/images/xeoto.png")}
            className="w-20 h-20"
          />
        </View>
        <View className="w-[150px] h-[150px] z-40 absolute bg-[#2375fe] rounded-full"></View>
        <View className="w-[200px] h-[200px] z-30 absolute bg-[#1a6ffd] rounded-full"></View>
        <View className="w-[250px] h-[250px] z-20 absolute bg-[#2375fe] rounded-full"></View>
        <View className="w-[300px] h-[300px] z-10 absolute bg-[#1a6ffd] rounded-full"></View>
        <View className="w-[350px] h-[350px] z-0 absolute bg-[#2375fe] rounded-full"></View>
      </View>
      {/* Nút điều hướng */}
      <View className="w-full pb-10 hidden">
        <TouchableOpacity
          className="w-full px-10"
          onPress={() =>goToFormLogin()}
        >
          <LinearGradient
            colors={["#dbdbda", "#f19105"]}
            style={{ borderRadius: 50 }}
          >
            <View className="w-full py-4 flex flex-row items-center justify-center gap-2">
              <MaterialIcons name="login" size={24} color="white" />
              <Text className="text-white font-bold uppercase text-[15px]">
                Đăng Nhập
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full px-10 pt-4"
          onPress={() => router.replace("/(screens)/(stack)/register")}
        >
          <LinearGradient
            colors={["#dbdbda", "#e8c308"]}
            style={{ borderRadius: 50 }}
          >
            <View className="w-full py-4 flex flex-row items-center justify-center gap-2">
              <AntDesign name="adduser" size={24} color="white" />
              <Text className="text-white font-bold uppercase text-[15px]">
                Đăng ký
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full px-10 pt-4"
          onPress={() => router.replace("/(screens)/(tabs)")}
        >
          <Text className="text-white font-bold uppercase text-[15px] text-center">
            Bỏ qua
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
  const checkAuthLoginAnimated =()=> {
    Animated.timing(refAnimatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  return <>
        <View className="w-full h-full relative">
           {formSlash}
           <Animated.View className="w-full absolute bottom-0 h-[250px] rounded-tr-[30px] rounded-tl-[30px]  z-50 overflow-hidden"
           style={{
            transform: [
              {
                translateY: refAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [250, 0],
                }),
              },
            ],  
           }}>
             <View className="w-full h-full  bg-blue-800/20 px-4 pt-5">
               <Text className="w-full text-2xl text-white text-center font-bold">Đang đăng nhập với tài khoản!</Text>
               <View className="w-full py-5 flex-row items-center justify-center relative">
                    {/* LOGO & hiệu ứng tròn */}
                   <View className="flex flex-row items-center gap-2 ">
                               <View className="w-[60px] h-[60px] bg-white p-1 rounded-full flex items-center justify-center">
                                 <Image  source={{uri:user?.avatar}} className="w-14 h-14 rounded-full" />
                              </View>
                    </View>
                   
                </View>
               <View className="w-full h-fullflex flex-row items-center justify-center gap-5 px-2">
                   
                   <TouchableOpacity className="w-full bg-blue-400 rounded-full p-2">
                      <View className="flex flex-row items-center justify-between p-2">
                          <View className="flex flex-row items-center gap-2 ">
                               <View className="w-[40px] h-[40px] bg-blue-900 p-2 rounded-full flex items-center justify-center">
                                <Text className="text-xl text-white font-bold">{numTime}</Text>
                              </View>
                          </View>
                           <Text className="text-white text-xl font-bold">{user?.name}</Text>
                          <View className="pr-2">
                             <ActivityIndicator
                                size="large"
                                color="#007AFF"
                                style={{width:8,height:8}}
                              />
                          </View>
                      </View>
                   </TouchableOpacity>
               </View>
            </View>
           </Animated.View>
        </View>
  </>;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "column",
   
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 999,
    alignContent: "center",
    
  },
});
