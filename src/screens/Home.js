import React, {useState, useEffect} from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {Selector} from '../components/Selector';
import {ListTable} from '../components/ListTable';
import {SafeAreaView, StatusBar, StyleSheet, Image} from 'react-native';
import {getFileList} from '../axios/fileList';
import {getFileListAuto} from '../axios/fileList';
import {getFileInfo} from '../axios/fileInfo';
import {TouchableView} from '../components/TouchableView';
import {BallIndicator} from 'react-native-indicators';
import {connectWifi, disconnectWifi} from '../utils/WifiManger';

const Home = () => {
  const [selector, setSelector] = useState('Contents'); //Contents or pictures will be selected.
  const [vedioData, setVedioData] = useState([]);
  const [pictureData, setPictureData] = useState([]);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState();
  const [isLoading, toggleLoading] = useState(false);
  const [refresh, toggleRefresh] = useState(false);
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    toggleLoading(true);
    connectWifi();

    try {
      Promise.all([
        getFileListAuto('Contents', setVedioData, 'video'),
        getFileListAuto('Contents', setPictureData, 'picture'),
        // getFileInfo('Table', setTitle),
        getFileInfo('Keyword', 'Keyword.txt', setInfo),
        getFileList('Table', setProfileImage, 'picture'),
      ]).then(() => toggleLoading(false));
    } catch (err) {
      console.log(err);
    }

    return () => {
      disconnectWifi();
    };
  }, [refresh]);
  console.log(profileImage);
  console.log(vedioData);
  console.log(pictureData);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {isLoading && (
        <BallIndicator color="black" style={styles.indicatorStyle} />
      )} */}
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
        profileImage={profileImage}
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
