import React, {useState, useEffect} from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {Selector} from '../components/Selector';
import {ListTable} from '../components/ListTable';
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
        style={styles.refreshTouchableViewStyle}
        onPress={() => {
          toggleRefresh(!refresh);
        }}>
        <Image
          source={require('../assets/images/refresh.png')}
          style={styles.imageStyle}
        />
      </TouchableView>
      <Selector selector={selector} setSelector={setSelector} />
      <ListTable
        title={title}
        info={info}
        vedioData={vedioData}
        pictureData={pictureData}
        selector={selector}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  refreshTouchableViewStyle: {
    position: 'absolute',
    zIndex: 10,
    width: 30,
    top: 15,
    right: 15,
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
