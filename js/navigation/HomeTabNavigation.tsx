import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {
  CategoriesActiveIcon,
  CategoryIcon,
  FavouriteIcon,
  HomeActiveIcon,
  HomeIcon,
  MoreIcon,
} from '../assets/Icons';
import {CText} from '../components';
import {TEXTS} from '../constants/texts';
import CategoryScreen from '../screens/CategoryScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MoreScreen from '../screens/MoreScreen';
import AnimatedTabBar from './components/AnimatedTabBar';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  const HomeBarIcon = useCallback(({focused}: {focused: boolean}) => {
    return focused ? (
      <HomeActiveIcon />
    ) : (
      <>
        <HomeIcon />
        <CText style={styles.tabBarTitle}>{TEXTS.HOME}</CText>
      </>
    );
  }, []);
  const CategoriesBarIcon = useCallback(({focused}: {focused: boolean}) => {
    return focused ? (
      <CategoriesActiveIcon />
    ) : (
      <>
        <CategoryIcon />
        <CText style={styles.tabBarTitle}>{TEXTS.CATEGORIES}</CText>
      </>
    );
  }, []);
  const FavBarIcon = useCallback(() => {
    return (
      <>
        <FavouriteIcon />
        <CText style={styles.tabBarTitle}>{TEXTS.FAVOURITE}</CText>
      </>
    );
  }, []);
  const MoreBarIcon = useCallback(() => {
    return (
      <>
        <MoreIcon />
        <CText style={styles.tabBarTitle}>{TEXTS.MORE}</CText>
      </>
    );
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: HomeBarIcon,
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Upload"
          options={{
            tabBarIcon: CategoriesBarIcon,
            headerShown: false,
          }}
          component={CategoryScreen}
        />
        <Tab.Screen
          name="Chat"
          options={{
            tabBarIcon: FavBarIcon,
            headerShown: false,
          }}
          component={FavouriteScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarIcon: MoreBarIcon,
            headerShown: false,
          }}
          component={MoreScreen}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarTitle: {textAlign: 'center', fontSize: 10, fontWeight: '500'},
});

export default HomeTabNavigation;
