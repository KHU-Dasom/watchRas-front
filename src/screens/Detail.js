import React from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {MovieElement} from '../components/Movie';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <NavigationHeader title={'Detail'} />
      <MovieElement
        vedioTitle={route.params.vedioTitle}
        createDate={route.params.createDate}
        videoUrl={
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        }
      />
    </SafeAreaView>
  );
};

export default Detail;
