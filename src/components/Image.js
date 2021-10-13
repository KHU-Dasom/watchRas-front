import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ImageElement = ({title}) => {
  const navigation = useNavigation();
  // 나중에 서버에서 비디오 있는 주소 및  title 정해서 주소 만들어주기
  const imagePath = '../data/Contents/' + title;
  return (
    <>
      <View>
        <Image
          style={{width: '100%'}}
          resizeMode="contain"
          source={require('../data/Table/figure.png')}
        />
      </View>
    </>
  );
};
