import React from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {useNavigation} from '@react-navigation/native';
import {TableElement} from '../components/ListTable';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

const DATA = [
    {vedioTitle: '2019-04-06, AS130', createDate: '2019-04-06'},
    {vedioTitle: '2019-07-13, P9130', createDate: '2019-07-13'},
    {vedioTitle: '2019-09-02, NB992', createDate: '2019-09-02'},
    {vedioTitle: '2019-10-04, AZ090', createDate: '2019-10-04'},
    {vedioTitle: '2019-11-16, OS421', createDate: '2019-11-16'},
    {vedioTitle: '2019-12-13, TP135', createDate: '2019-12-13'},
    {vedioTitle: '2020-01-03, FA084', createDate: '2020-01-03'},
    {vedioTitle: '2020-05-08, LSP47', createDate: '2020-05-08'},
]

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1}}>
          <StatusBar barStyle={'light-content'} />
          <NavigationHeader title={'HOME'} />
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
                <TableElement
                vedioTitle={item.vedioTitle}
                createDate={item.createDate}
                key={index}
                />
            )}
          />
          
        </SafeAreaView>
      );
};

export default Home;
