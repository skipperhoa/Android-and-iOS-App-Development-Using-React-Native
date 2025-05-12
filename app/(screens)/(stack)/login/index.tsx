import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import {
  EvilIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useForm, Controller, set } from "react-hook-form";

// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/redux/actions/authActions";

// add AlertModal
import AlertModal from "@/modules/alert/AlertModal";

const MAX_HEIGHT_HEADER = 200;
export default function LoginScreen() {
  const {token, user, error} = useSelector((state) => state.auth);
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [fontsLoaded, fontError] = useFonts({
    HelvetIns: require("@/assets/fonts/HelvetIns.ttf"),
    PlaywriteNL: require("@/assets/fonts/Playwrite_NL/Playwrite-NL.ttf"),
    Montserrat: require("@/assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /* check user */
  useEffect(() => {
    if (user) {
      router.replace("/(screens)/(tabs)");
    }
  }, [user]);

  /* check error */
  useEffect(() => {
        if (error!== null) {
           setShowModal(true);
        }
  }, [error]);

  /**close modal */
  const closeModal = () => {
    setShowModal(false);
    //dispatch({ type: "CLEAR_ERROR" });
  }

 

  /* function login */
  const onSubmit = (data: any) => {
      dispatch(loginRequest(data))
  }
  return (
    <>
      {/* content */}
      <View
        className="w-full h-full bg-blue-600 relative z-50"
        style={{ paddingTop: Constants.statusBarHeight + 50 }}
      >
        {/* form login */}
        <View className="w-full relative z-50">
          <View className="w-[100px] h-[100px] rounded-full bg-blue-400 flex-col items-center justify-center m-auto">
            <View className="w-[80px] h-[80px] rounded-full bg-blue-300 flex-col items-center justify-center m-auto">
              <View className="w-[60px] h-[60px] rounded-full bg-blue-200 flex-col items-center justify-center m-auto">
                <Image
                  source={require("@/assets/images/xeoto.png")}
                  className="w-[40px] h-[40px] mx-auto"
                />
              </View>
            </View>
          </View>
          <Text
            className="font-bold text-2xl text-white uppercase text-center mt-4"
            style={{ fontFamily: "HelvetIns" }}
          >
            ĐĂNG NHẬP
          </Text>

          {/* form group */}

          <View className="w-full px-5 pt-2">
            {/* form */}
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    {/* item email */}
                    <View className="w-full py-2">
                      <Text
                        className="w-full text-white py-2"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Email
                      </Text>
                      <TextInput
                        className="w-full bg-white p-5 rounded-md"
                        placeholder="nguyen.thanh.hoa.ctec@gmail.com"
                        onBlur={onBlur}
                        onChangeText={onChange}
                      />
                    </View>
                  </>
                )}
                name="email"
              />
              {errors.email && <Text className="text-yellow-500">This is required.</Text>}

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    {/* item password */}
                    <View className="w-full py-2">
                      <Text
                        className="w-full text-white py-2"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Password
                      </Text>
                      <View className="w-full relative">
                        <TextInput
                          className="w-full bg-white p-5 rounded-md"
                         
                          secureTextEntry={true}
                          onBlur={onBlur}
                          onChangeText={onChange}
                        />
                        <TouchableOpacity
                          className="absolute right-5 top-[14px]"
                          onPress={() => {
                            Alert.alert("Eye");
                          }}
                        >
                          <Entypo name="eye" size={24} color="gray" />
                        </TouchableOpacity>
                      </View>
                      <View className="mt-2">
                        <TouchableOpacity>
                          <Text
                            className="w-full text-white py-2 text-right italic underline"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            Quên mật khẩu?
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>
                )}
                name="password"
              />

              {/* button */}
              <View className="w-full py-2">
                <LinearGradient
                  colors={["#0396e5", "#0352e5", "#032de5"]}
                  style={{ width: "100%", borderRadius: 50, padding: 13 }}
                >
                  <TouchableOpacity className="w-full" onPress={handleSubmit(onSubmit)}>
                    <View className="w-fullflex flex-row items-center justify-center gap-2">
                      <AntDesign name="arrowright" size={24} color="white" />
                      <Text className="text-center text-white font-bold">
                        Đăng nhập
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>

            {/* end form */}
          </View>

          {/* Group social */}
          <View className="w-full px-5 pt-2">
            <View className="w-full flex flex-row items-center justify-center gap-2">
              <Text
                className="text-sm text-white"
                style={{ fontFamily: "Montserrat" }}
              >
                Bạn chưa có tài khoản?
              </Text>
              <TouchableOpacity>
                <Text
                  className="w-full text-white py-2 text-right font-bold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Đăng ký
                </Text>
              </TouchableOpacity>
            </View>

            {/* box social */}
            <View className="w-full pt-20">
              <TouchableOpacity className="w-full">
                <View
                  className="w-full flex flex-row items-center justify-center gap-3  bg-white py-5 rounded-xl"
                  style={styles.boxShadow}
                >
                  <Image
                    source={require("@/assets/images/google.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    className="text-gray-700"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Đăng nhập bằng Google
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="w-full mt-4">
                <View
                  className="w-full flex flex-row items-center justify-center gap-3 bg-white py-5 rounded-xl"
                  style={styles.boxShadow}
                >
                  <Image
                    source={require("@/assets/images/facebook.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    className="text-black"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Đăng nhập bằng Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

         {/* Alert Modal */}
          {showModal && <View className="w-full h-screen absolute z-50">
             <AlertModal
           showModal={showModal}
            title="Thông báo"
            message="Bạn đăng nhập không thành công!"
            error={error}
            bgColor="#ccc"
            onPress={closeModal}
            />
          </View>}
      </View>
      {/* end content */}

     
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
