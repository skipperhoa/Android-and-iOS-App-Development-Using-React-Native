import React from 'react';
import { View, StyleSheet, Dimensions ,ScrollView} from 'react-native';
import Svg, { Path,Rect,Circle,Polygon,Defs, LinearGradient, Stop} from 'react-native-svg';
import Curve  from '../../components/Curver';
const { width, height } = Dimensions.get('window');

const BoxScreen = () => {
    console.warn(height);
    const { width, height } = Dimensions.get('window');
   // const svgWidth = width * 0.9;
  //  const svgHeight = height * 0.4;

    // Tính toán kích thước của SVG
  const svgWidth = width;
  const svgHeight = height * 0.2; // Điều chỉnh chiều cao tùy ý
  
    // Define the points of the triangle within the SVG viewport
    const points = `10,${svgHeight - 10} ${svgWidth / 2},10 ${svgWidth - 10},${svgHeight - 10}`;
   // Đường dẫn của path trong SVG
   const path = `M0,280.8S${283.66 * svgWidth / 1416.99},${59 * svgHeight / 174.01},${608.94 * svgWidth / 1416.99},${163.56 * svgHeight / 174.01}s${437.93 * svgWidth / 1416.99},${150.57 * svgHeight / 174.01},${808 * svgWidth / 1416.99},${10.34 * svgHeight / 174.01}V${309.54 * svgHeight / 174.01}H0V280.8Z`;

  return (
   <ScrollView>
     <View style={styles.container}>
      <Svg height={100} width={width} viewBox={`0 0 1440 320`}>
        <Path
          d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,160C840,128,960,96,1080,112C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="#0099ff"
        />
      </Svg>

      <View style={styles.container}>
      <Svg height="200" width="200" viewBox="0 0 200 200">
        {/* Fan Blade 1 */}
        <Path
          d="M100,100 L150,150 A50,50 0 0,1 100,100 Z"
          fill="blue"
          opacity="0.1"
        />
        {/* Fan Blade 2 */}
        <Path
          d="M100,100 L50,150 A50,50 0 0,1 100,100 Z"
          fill="blue"
          opacity="0.3"
        />
        {/* Fan Blade 3 */}
        <Path
          d="M100,100 L50,50 A50,50 0 0,1 100,100 Z"
          fill="blue"
          opacity="0.5"
        />
        {/* Fan Blade 4 */}
        <Path
          d="M100,100 L150,50 A50,50 0 0,1 100,100 Z"
          fill="blue"
          opacity="0.7"
        />
      </Svg>
    </View>
    <Svg height="200" width="300" viewBox="0 0 300 200">
        {/* Thân xe */}
        <Rect x="50" y="80" width="200" height="60" fill="blue" />
        
        {/* Cabin */}
        <Rect x="200" y="60" width="50" height="50" fill="blue" />
        
        {/* Bánh xe */}
        <Circle cx="75" cy="150" r="20" fill="black" />
        <Circle cx="175" cy="150" r="20" fill="black" />
        <Circle cx="225" cy="150" r="20" fill="black" />
        
        {/* Cửa sổ */}
        <Rect x="210" y="70" width="30" height="20" fill="white" />
        
        {/* Hàng hóa */}
        <Rect x="60" y="85" width="80" height="50" fill="gray" />
      </Svg>

      <View style={styles.container}>
      <Svg height="200" width="400" viewBox="0 0 400 200">
        {/* Ngọn núi thứ nhất */}
        <Polygon
          points="50,150 150,50 250,150"
          fill="gray"
        />
        {/* Ngọn núi thứ hai */}
        <Polygon
          points="150,150 250,30 350,150"
          fill="darkgray"
        />
        {/* Ngọn núi thứ ba */}
        <Polygon
          points="250,150 350,80 450,150"
          fill="lightgray"
        />
      </Svg>
    </View>

    {/* curve */}
    <Svg height={height} width={width}>
        {/* Cubic Bézier Curve */}
        <Path
          d="M 10 60 C 20 80, 40 80, 50 60"
          stroke="black"
          fill="transparent"
        />
        {/* Control points for visualization */}
        <Circle cx="40" cy="10" r="3" fill="red" />
        <Circle cx="65" cy="10" r="3" fill="red" />
        <Circle cx="150" cy="150" r="3" fill="red" />
      </Svg>

      <Curve />
      <View>
      {/* <Svg height={screenHeight / 2} width={screenWidth}>
        <Path
          d={`M${screenWidth * 0.05} ${screenHeight * 0.2} Q ${screenWidth * 0.5} ${screenHeight * 0.05}, ${screenWidth * 0.9} ${screenHeight * 0.2} T ${screenWidth * 1.35} ${screenHeight * 0.375}`}
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </Svg> */}
    </View>

    <View style={styles.container}>
      <Svg height={svgHeight} width={svgWidth}>
        <Polygon points={points} fill="none" stroke="black" strokeWidth="2" />
      </Svg>
    </View>

    <Svg height="174" width="1416.99">
        <Path
          fill="#0099ff"
          d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
          transform="translate(0 -135.53)"
        />
      </Svg>

      <Svg height={height/2} width="width">
        <Path
          d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"
        />
      </Svg>

      <Svg height="250" width={width}>
        <Path
          fill="#0099ff"
          d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </Svg>

      <Svg height={svgHeight} width={svgWidth}>
        <Path
          fill="#0099ff"
          d={path}
          transform={`translate(0 ${-135.53 * svgHeight / 174.01})`}
        />
      </Svg>

    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Ensure the BoxScreen are at the bottom
    alignItems: 'center',
  },
});

export default BoxScreen;
