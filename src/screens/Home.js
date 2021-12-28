import React, {useState, useEffect} from 'react';
import {NavigationHeader} from '../components/NavigationHeader';
import {Selector} from '../components/Selector';
import {ListTable} from '../components/ListTable';
import {SafeAreaView, StatusBar, StyleSheet, Image} from 'react-native';
import {getFileList, getFileListDir} from '../axios/fileList';
import {getFileListAuto} from '../axios/fileList';
import {getFileInfo} from '../axios/fileInfo';
import {TouchableView} from '../components/TouchableView';
import {BallIndicator} from 'react-native-indicators';
import {connectWifi, disconnectWifi} from '../utils/WifiManger';

/* ==========================
Home Screen
이 화면에서 사진 및 영상의 리스트를 나타냅니다.
ListTable 컴포넌트를 이용하여, 리스트를 나타냅니다.
========================== */

const Home = () => {
  const [selector, setSelector] = useState('Contents'); //Contents or pictures will be selected.
  const [vedioData, setVedioData] = useState([]);
  const [pictureData, setPictureData] = useState([]);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState();
  const [isLoading, toggleLoading] = useState(false);
  const [refresh, toggleRefresh] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const [targetDir, setTargetDir] = useState('METAFIGURE');

  useEffect(() => {
    // connectWifi();  // 와이파이 자동연결
  }, []);
  useEffect(() => {
    toggleLoading(true);
    try {
      Promise.all([
        getFileListDir(setTargetDir),
        getFileListAuto('Contents', setVedioData, 'video'),
        getFileListAuto('Contents', setPictureData, 'picture'),
        // getFileInfo('Table', setTitle),
        getFileInfo('Keyword', 'Keyword.txt', setInfo, targetDir),
        getFileList('Table', setProfileImage, 'picture'),
      ]).then(() => toggleLoading(false));
    } catch (err) {
      console.log(err);
    }
    console.log(targetDir);
  }, [refresh]);

  useEffect(() => {
    Promise.all([getFileInfo('Keyword', 'Keyword.txt', setInfo, targetDir)]);
  }, [targetDir]);

  console.log(profileImage);
  console.log(vedioData);
  console.log(pictureData);
  console.log(info);
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
        targetDir={targetDir}
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
