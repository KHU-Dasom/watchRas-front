import React from 'react';
import type { FC, ReactNode, ComponentProps } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = TouchableOpacityProps & {
  children?: ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
};

/* ==========================
TouchableView
클릭을 할 수 있는 View Component입니다.
========================== */

export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>
  );
};
