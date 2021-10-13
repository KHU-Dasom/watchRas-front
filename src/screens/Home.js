import React, {useState, useEffect} from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {TableElement} from '../components/ListTable';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {getFileList} from '../axios/fileList';
import {getFileInfo} from '../axios/fileInfo';
import {TouchableView} from '../components/TouchableView';
import {BallIndicator} from 'react-native-indicators';

const vedioData = [
  {title: 'let_it_go.mp4', createDate: '2019-04-06', fileType: 'vedio'},
  {
    title: 'love_is_an_open_door.mp4',
    createDate: '2019-07-13',
    fileType: 'vedio',
  },
  {title: 'unknown.mp4', createDate: '2019-09-02', fileType: 'vedio'},
  {title: 'let_it_go.mp4', createDate: '2019-04-06', fileType: 'vedio'},
  {
    title: 'love_is_an_open_door.mp4',
    createDate: '2019-07-13',
    fileType: 'vedio',
  },
  {title: 'unknown.mp4', createDate: '2019-09-02', fileType: 'vedio'},
  {title: 'let_it_go.mp4', createDate: '2019-04-06', fileType: 'vedio'},
  {
    title: 'love_is_an_open_door.mp4',
    createDate: '2019-07-13',
    fileType: 'vedio',
  },
  {title: 'unknown.mp4', createDate: '2019-09-02', fileType: 'vedio'},
  {title: 'let_it_go.mp4', createDate: '2019-04-06', fileType: 'vedio'},
  {
    title: 'love_is_an_open_door.mp4',
    createDate: '2019-07-13',
    fileType: 'vedio',
  },
  {title: 'unknown.mp4', createDate: '2019-09-02', fileType: 'vedio'},
];

const pictureData = [
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
  {title: 'cat.png', createDate: '2019-04-06', fileType: 'picture'},
  {
    title: 'dog.png',
    createDate: '2019-07-13',
    fileType: 'picture',
  },
  {title: 'rabbit.png', createDate: '2019-09-02', fileType: 'picture'},
];

const title = 'Anna princess';
const info = `Anna is a lovely princess of Winter Kingdom.
She is sister of Elsa.

She song a 'love is an open door' with prince Hans.
But, Hans prince actually is a villain.
He hurt her mind and tried to harm Else.

In the end, He should take his responsibility for what he has done.`;

const Home = () => {
  const [selector, setSelector] = useState('Contents'); //Contents or pictures will be selected.
  // const [vedioData, setVedioData] = useState([]);
  // const [pictureData, setPictureData] = useState([]);
  // const [title, setTitle] = useState();
  // const [info, setInfo] = useState();
  const [isLoading, toggleLoading] = useState(false);
  const [refresh, toggleRefresh] = useState(false);

  // useEffect(() => {
  //   toggleLoading(true);
  //   Promise.all([
  //     ((getFileList('Contents', setVedioData, 'vedio'),
  //     getFileList('pictures', setPictureData, 'picture')),
  //     getFileInfo('Table', setTitle),
  //     getFileInfo('Key Words', setInfo)),
  //   ]).then(() => toggleLoading(false));
  // }, [refresh]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading && (
        <BallIndicator color="black" style={styles.indicatorStyle} />
      )}
      <StatusBar barStyle={'light-content'} />
      <NavigationHeader title={'HOME'} />
      <TouchableView
        style={{
          position: 'absolute',
          zIndex: 10,
          width: 30,
          top: 15,
          right: 15,
        }}
        onPress={() => {
          toggleRefresh(!refresh);
        }}>
        <Image
          source={require('../assets/images/refresh.png')}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
          }}
        />
      </TouchableView>
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
            영상
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

      <FlatList
        ListHeaderComponent={
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.figureOuterViewStyle}>
              <Image
                style={{width: '100%'}}
                resizeMode="contain"
                source={require('../data/Table/figure.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.figureTitleStyle}>{title}</Text>
              <Text style={styles.figureTextStyle}>{info}</Text>
            </View>
          </View>
        }
        data={selector == 'Contents' ? vedioData : pictureData}
        renderItem={({item, index}) => (
          <TableElement
            title={item.title}
            createDate={item.createDate}
            fileType={item.fileType}
            key={index}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  selectorStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  selectorTextStyle: {fontSize: 23},
  figureOuterViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  figureTitleStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  figureTextStyle: {
    flex: 10,
    fontSize: 14,
    color: 'black',
  },
  indicatorStyle: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },
});
