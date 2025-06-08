/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Card from './card';
import {DataType} from './data';

const CradSwipeScreen = ({data}: {data: DataType[]}) => {
  const [newData, setNewData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [actionIndex, setActionsIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 3;

  useEffect(() => {
    setNewData(data);
  }, [data]);

  useAnimatedStyle(() => {
    if (animatedValue.value > currentIndex + 0.5) {
      runOnJS(setActionsIndex)(currentIndex + 1);
    } else {
      runOnJS(setActionsIndex)(currentIndex);
    }
    const opacity = interpolate(
      animatedValue.value,
      [currentIndex, currentIndex + 0.3, currentIndex + 0.8, currentIndex + 1],
      [1, 0, 0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity: opacity,
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.cardContainer}>
        {newData.map((item, index) => {
          if (index > currentIndex + MAX || index < currentIndex) {
            return null;
          }
          return (
            <Card
              newData={newData}
              setNewData={setNewData}
              maxVisibleItems={MAX}
              item={item}
              index={index}
              dataLength={newData.length}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              key={index}
            />
          );
        })}
      </View>

      <View style={{marginTop: 220}}>
        {newData[actionIndex]?.actions?.map(item => {
          return (
            <View key={item.id} style={{flexDirection: 'row', marginTop: 32}}>
              <Image source={item.icon} style={{height: 32, width: 32}} />
              <View style={{marginLeft: 12}}>
                <Text style={{color: '#222222'}}>{item.title}</Text>
                <Text style={{color: '#25345F'}}>{item.subTitle}</Text>
              </View>

              {item.id === 'FREEZE' ? (
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                    flex: 1,
                  }}>
                  <Switch
                    value={newData[actionIndex].isFreezed}
                    onValueChange={() => {
                      const updatedData = newData.map((dataItem, i) =>
                        i === actionIndex
                          ? {
                              ...dataItem,
                              isFreezed: !dataItem.isFreezed,
                              backgroundColor: dataItem.isFreezed
                                ? dataItem.defaultColor
                                : 'grey',
                            }
                          : dataItem,
                      );
                      setNewData(updatedData);
                    }}
                  />
                </View>
              ) : null}
            </View>
          );
        })}
      </View>
    </GestureHandlerRootView>
  );
};

export default CradSwipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: -80,
    alignItems: 'center',
  },
  activityContainer: {
    flex: 3 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    position: 'relative',
    paddingHorizontal: 16,
  },
});
