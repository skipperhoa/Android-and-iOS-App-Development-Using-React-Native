import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path,Rect,Circle,Polygon} from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const BoxScreen = () => {
    console.warn(height);
  return (
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


    </View>
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
