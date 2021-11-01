import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableView} from './TouchableView';

export const Selector = ({selector, setSelector}) => {
  return (
    <View style={{flexDirection: 'row', top: -1, height: 50}}>
      <TouchableView
        style={[
          styles.selectorStyle,
          {
            marginRight: 0.5,
            borderColor: selector === 'Contents' ? '#354cd9' : '#d9d9d9',
          },
        ]}
        onPress={() => setSelector('Contents')}>
        <Text
          style={[
            styles.selectorTextStyle,
            {color: selector === 'Contents' ? '#354cd9' : '#d9d9d9'},
          ]}>
          컨텐츠
        </Text>
      </TouchableView>
      <TouchableView
        style={[
          styles.selectorStyle,
          {
            marginLeft: 0.5,
            borderColor: selector === 'pictures' ? '#354cd9' : '#d9d9d9',
          },
        ]}
        onPress={() => setSelector('pictures')}>
        <Text
          style={[
            styles.selectorTextStyle,
            {color: selector === 'pictures' ? '#354cd9' : '#d9d9d9'},
          ]}>
          사진
        </Text>
      </TouchableView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectorStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  selectorTextStyle: {fontSize: 23},
});
