import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from "react-native";
import {
  FontAwesome5,
  
  MaterialCommunityIcons,

} from "@expo/vector-icons";

function HomeSearch() {
  return (
    <>
     <View className="w-full px-5 pb-5 mt-5">
            <View className="flex-row items-center justify-between gap-2">
              <View className="flex-1 bg-gray-100 flex-row items-center p-3 rounded-md">
                <View className="flex-row items-center gap-2">
                  <FontAwesome5 name="search" size={20} color="#027DFC" />
                  <TextInput
                    className="text-gray-500 flex-1"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <View className="w-10 h-10 bg-gray-100 flex-col justify-center items-center rounded-md">
                    <MaterialCommunityIcons
                      name="filter-menu"
                      size={20}
                      color="#027DFC"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        
     
    </>
  )
}

export default HomeSearch