import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ArcProgressProps {
  size?: number;
  strokeWidth?: number;
  progress: number; // від 0 до 1
  color?: string;   // новий пропс для кольору дуги
}

const ArcProgress: React.FC<ArcProgressProps> = ({
  size = 180,
  strokeWidth = 15,
  progress,
  color = '#2a9df4', // значення за замовчуванням
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size / 2}>
        {/* Фонова дуга */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#eee"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2}, ${circumference}`}
          strokeLinecap="round"
          rotation={-180}
          originX={size / 2}
          originY={size / 2}
          fill="none"
        />
        {/* Активна дуга */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color} // використання пропса
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2}, ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation={-180}
          originX={size / 2}
          originY={size / 2}
          fill="none"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ArcProgress;
