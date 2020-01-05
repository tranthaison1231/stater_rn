import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

interface TextAnimatorProps {
  onFinish: any;
  content: string;
  duration: number;
}

const StyledAnimator = styled.View`
  flex-flow: wrap row;
`;

const TextAnimator: FC<TextAnimatorProps> = React.memo(
  ({ content, duration, onFinish }: TextAnimatorProps) => {
    const animatedValues = [];

    const textArr = content.trim().split(' ');

    textArr.forEach((_, i) => {
      animatedValues[i] = new Animated.Value(0);
    });

    useEffect(() => {
      const animated = (toValue = 1): number => {
        const animations = textArr.map((_, i) => {
          return Animated.timing(animatedValues[i], {
            toValue,
            duration,
            useNativeDriver: true,
          });
        });

        Animated.stagger(duration / 5, animations).start(() => {
          if (onFinish) {
            onFinish();
          }
        });
      };
      animated();
    }, [animatedValues, duration, onFinish, textArr]);

    return (
      <StyledAnimator>
        {textArr.map((word, index) => {
          return (
            <Animated.Text
              key={String(index)}
              style={[
                {
                  opacity: animatedValues[index],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        animatedValues[index],
                        new Animated.Value(-5),
                      ),
                    },
                  ],
                },
              ]}
            >
              {word}
              {`${index < textArr.length ? ' ' : ''}`}
            </Animated.Text>
          );
        })}
      </StyledAnimator>
    );
  },
);

export default TextAnimator;
