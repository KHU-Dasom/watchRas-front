import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

import {
  useNavigationHorizontalInterpolator,
  useNavigationHorizontalInterpolatorNotInverted,
} from '../hooks/useNavigationHorizontalInterpolator';

import Home from './Home';
import Detail from './Detail';

const Stack = createStackNavigator();

export default function Navigator() {
  const interpolator = useNavigationHorizontalInterpolator();
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  );

  const interpolatorRight = useNavigationHorizontalInterpolatorNotInverted();
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolatorRight,
    }),
    [],
  );

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen 
        name="Detail"
        component={Detail}
        options={leftOptions} />
    </Stack.Navigator>
  );
}
