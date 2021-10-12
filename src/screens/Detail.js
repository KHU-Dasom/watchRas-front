import React from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';


const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <SafeAreaView>
          <StatusBar barStyle={'light-content'} />
          <NavigationHeader title={'Detail'} />
          <Text>{JSON.stringify(route.params)}</Text>
          
        </SafeAreaView>
      );
};

export default Detail;
