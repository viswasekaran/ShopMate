import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useReducer} from 'react';
import {Dimensions, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Path, Svg} from 'react-native-svg';
import {TabBarComponent} from './TabBarComponent';

const {height} = Dimensions.get('screen');

export const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };
  const [layout, dispatch] = useReducer(reducer, []);
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) {
      return 0;
    }
    return [...layout].find(({index}) => index === activeIndex)!.x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View style={[styles.tabBar, {paddingBottom: bottom}]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}>
        <Path
          fillOpacity={0}
          fill="rgba(255, 255, 255, 1)"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <View key={index}>
              <TabBarComponent
                key={route.key}
                active={active}
                options={options}
                onLayout={e => handleLayout(e, index)}
                onPress={() => navigation.navigate(route.name)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F8F7FB',
    height: height * 0.1,
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
