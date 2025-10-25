import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
Dimensions,
  useWindowDimensions
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
// data image
const slides = [
  {
    image: require("../../../assets/images/01.jpg"),
  },
  {
    image: require("../../../assets/images/02.jpg"),
  },
  {
    image: require("../../../assets/images/03.png"),
  },
  {
    image: require("../../../assets/images/04.jpg"),
  },
  {
    image: require("../../../assets/images/05.jpg"),
  },
];
const { width: screenWidth } = Dimensions.get("window");
function HomeSlide() {
const { width, height } = useWindowDimensions();
 const _renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={{ width: "100%" }}>
        <Image
          source={item.image}
          style={{ width: "100%", height: 200, borderRadius: 15 }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
    
      <View>
            <View style={{ width: "100%" }}>
              {
                <Carousel
                  // layout={'stack'}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 50}
                  data={slides}
                  renderItem={_renderItem}
                  hasParallaxImages={true}
                />
              }
            </View>
          </View>
    </>
  )
}

export default HomeSlide