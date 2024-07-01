import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');

const Curve = () => {
  // Tính toán tọa độ dựa trên chiều rộng màn hình
  const startX = width * 0.05;
  const startY = 60;
  const controlX1 = width * 0.1;
  const controlY1 = 80;
  const controlX2 = width * 0.2;
  const controlY2 = 80;
  const endX = width * 0.25;
  const endY = 60;

  const pathData = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

  return (
    <View style={styles.container}>
      <Svg height="200" width={width}>
        {/* Cubic Bézier Curve */}
        <Path
          d={pathData}
          stroke="black"
          fill="transparent"
        />
        {/* Control points for visualization */}
        <Circle cx={controlX1} cy={controlY1} r="3" fill="red" />
        <Circle cx={controlX2} cy={controlY2} r="3" fill="red" />
        <Circle cx={endX} cy={endY} r="3" fill="red" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Curve;
