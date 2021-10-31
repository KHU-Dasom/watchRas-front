import React from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native';
import {MovieElement} from '../components/Movie';
import {ImageElement} from '../components/Image';

/* ==========================
Detail Screen
이 화면에서 사진 및 영상을 보여줍니다.
각각 MovieElement 컴포넌트와 ImageElement 컴포넌트에 파일이름(title)을 넘겨주어 해당 컴포넌트에서 이름에 해당하는 것을 가져옵니다.
fileType이 video인 경우 MovieElement를 보여주고, 그렇지 않다면 ImageElement를 보여줍니다.
========================== */

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const title = route.params.title;
  const createDate = route.params.createDate;
  const fileType = route.params.fileType;

  return (
    <>
      <NavigationHeader title={'Detail'} />

      {/* <View style={styles.infoArea}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>생성일 : {createDate}</Text>
      </View> */}
      <View style={{margin: 10, backgroundColor: '#dbdbdb', height: 1}} />
      {fileType === 'video' ? (
        <MovieElement title={title} />
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <ImageElement title={title} />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  infoArea: {
    marginTop: 10,
    marginLeft: 15,
  },

  titleText: {
    fontSize: 20,
    color: 'black',
  },
});

export default Detail;
