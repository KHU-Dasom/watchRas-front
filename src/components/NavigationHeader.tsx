import React, {useCallback, useState} from 'react';
import type {FC, ReactNode} from 'react';
import {StyleSheet, View, Text, Image, Modal, BackHandler} from 'react-native';
import type {StyleProp, TextStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableView} from './TouchableView';
import {disconnectWifi} from '../utils/WifiManger';

export type NavigationHeaderProps = {
  title?: string;
  Left?: () => ReactNode;
  Right?: () => ReactNode;
  titleStyle?: StyleProp<TextStyle>;
};

/* ==========================
NavigationHeader
위에 Header를 나타냅니다.
뒤로가기 버튼과 해당 스크린의 제목이 나타납니다.
========================== */

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  title,
  Right,
  titleStyle,
}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const goExit = useCallback(() => {disconnectWifi(); BackHandler.exitApp();} , [navigation])
  const [modalVisible, toggleModal] = useState(false);

  return (
    <>
    <Modal
      visible={modalVisible}
      transparent
      onRequestClose={() => toggleModal(!modalVisible)}
      >
        <View style={styles.centerView}>
          <View style={styles.modal}>
            <Text style={{fontSize: 20}}>정말로 종료 하시겠습니까?</Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
            <TouchableView style={{flex: 5, justifyContent: 'center', backgroundColor: '#354cd9', height: 35, borderRadius: 8}} onPress={() => goExit()}>
            <Text style={{textAlign: 'center', fontSize: 18,  color: 'white'}}>확인</Text>
            </TouchableView>
            <View style={{flex: 1}}/>
            <TouchableView style={{flex: 5, justifyContent: 'center', backgroundColor: '#f6f6f6', height: 35, borderRadius: 8}} onPress={() => toggleModal(!modalVisible)}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>취소</Text>
            </TouchableView>
            </View>
          </View>
        </View>
      </Modal>
    <View style={[styles.view]}>
        <TouchableView
          onPress={navigation.canGoBack() ? goBack : () => toggleModal(!modalVisible)}
          style={{
            height: '100%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/images/leftArrow.png')}
            style={{
              marginLeft: 10,
              tintColor: '#191919',
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
          onPress={() => {null}}
        >
          <Image
            source={require('../assets/images/refresh.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: 'white'
            }}
          />
        </TouchableView>
    </View>
    </>
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
  centerView: {
    flex: 1,
    backgroundColor: 'rgba(25, 25, 25, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 150,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
});
