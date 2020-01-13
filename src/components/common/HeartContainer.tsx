import React, { useState, FC, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import Heart from './Heart';
import { dimensions } from '../../utils/Dimensions';

const animationEndY = Math.ceil(dimensions.height + 0.7);
const negativeEndY = animationEndY * -1;

const HeartContainer: FC<Props> = ({ style, onComplete }: Props) => {
  const [position] = useState(new Animated.Value(0));
  const yAnimation = position.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0],
  });

  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0],
  });

  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.4, 1],
    extrapolate: 'clamp',
  });

  const xAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: [0, 25, 15, 0, 10],
  });

  const rotateAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: ['0deg', '5deg', '0deg', '5deg', '0deg'],
  });

  useEffect(() => {
    Animated.timing(position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(onComplete);
  }, [onComplete, position]);

  const getHeartStyle = (): object => {
    return {
      transform: [
        {
          translateY: position,
        },
        {
          scale: scaleAnimation,
        },
        {
          translateX: xAnimation,
        },
        { rotate: rotateAnimation },
      ],
      opacity: opacityAnimation,
    };
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: 30,
          backgroundColor: 'transparent',
        },
        getHeartStyle(),
        style,
      ]}
    >
      <Heart color="purple" size={50} />
    </Animated.View>
  );
};

interface Props {
  style: object;
  onComplete: () => void;
}

HeartContainer.defaultProps = {};

export default HeartContainer;
