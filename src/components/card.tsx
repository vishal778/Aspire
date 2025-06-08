import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DataType} from './data';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

type Props = {
  newData: DataType[];
  setNewData: React.Dispatch<React.SetStateAction<DataType[]>>;
  maxVisibleItems: number;
  item: DataType;
  index: number;
  dataLength: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Card = ({
  newData,
  setNewData,
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
}: Props) => {
  const {width} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate(e => {
      const isSwipeRight = e.translationX > 0;
      direction.value = isSwipeRight ? 1 : -1;

      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1],
        );
      }
    })
    .onEnd(e => {
      if (currentIndex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, {duration: 500});
          animatedValue.value = withTiming(currentIndex, {duration: 500});
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-30, 0],
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1],
    );

    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20],
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1],
    );

    return {
      transform: [
        {translateY: currentItem ? 0 : translateY},
        {scale: currentItem ? 1 : scale},
        {translateX: translateX.value},
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : '0deg',
        },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.container,
          {backgroundColor: item.backgroundColor, zIndex: dataLength - index},
          animatedStyle,
        ]}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../dls/assets/AspireLogo.png')}
            style={styles.logo}
          />
        </View>

        <View>
          <Text style={styles.cardName}>{item?.name}</Text>

          <Text style={styles.cardNumber}>{item.number}</Text>

          <View style={styles.expiryRow}>
            <Text style={styles.cardDetails}>{`Thru: ${item.exp}`}</Text>
            <Text
              style={[
                styles.cardDetails,
                styles.cvv,
              ]}>{`CVV: ${item.cvv}`}</Text>
          </View>

          <View style={styles.visaWrapper}>
            <Image
              source={require('../dls/assets/Visa.png')}
              style={styles.visa}
            />
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 360,
    height: 220,
    borderRadius: 8,
    padding: 24,
  },
  logoWrapper: {
    alignSelf: 'flex-end',
  },
  logo: {
    height: 20,
    width: 80,
  },
  cardName: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  cardNumber: {
    marginTop: 24,
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 1.5,
    fontWeight: '500',
  },
  expiryRow: {
    flexDirection: 'row',
  },
  cardDetails: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 14,
    letterSpacing: 1.5,
    fontWeight: '500',
  },
  cvv: {
    marginLeft: 32,
  },
  visaWrapper: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  visa: {
    height: 20,
    width: 60,
  },
});
