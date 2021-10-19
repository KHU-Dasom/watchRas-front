import React from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native';
import {MovieElement} from '../components/Movie';
import {ImageElement} from '../components/Image';

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
