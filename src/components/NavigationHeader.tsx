import React, {useCallback} from 'react';
import type {FC, ReactNode} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import type {StyleProp, TextStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableView} from './TouchableView';

export type NavigationHeaderProps = {
  title?: string;
  Left?: () => ReactNode;
  Right?: () => ReactNode;
  titleStyle?: StyleProp<TextStyle>;
};

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  title,
  titleStyle,
}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={[styles.view]}>
        <TouchableView
          onPress={navigation.canGoBack() ? goBack : null}
          style={{
            height: '100%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/images/leftArrow.png')}
            style={{
              marginLeft: 10,
              tintColor: navigation.canGoBack() ? '#191919' : 'white',
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          height: '100%',
        }}>
        <Text numberOfLines={1} style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </View>
      <TouchableView
          style={{
            height: '100%',
            justifyContent: 'center',
            width: 40,
          }}
          // onPress={SaerchPossibleAP}
        >
          <Image
            source={require('../assets/images/magnify.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 61,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: 'black',
  },
  flex: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
