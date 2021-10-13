import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';

export const MovieElement = ({vedioTitle, createDate, videoUrl}) => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <View style={styles.infoArea}>
          <Text style={styles.titleText}>{vedioTitle}</Text>
          <Text>생성일 : {createDate}</Text>
        </View>
        <View style={{margin: 20, backgroundColor: '#dbdbdb', height: 1}}/>
        <View style={styles.movieArea}>
          <Video
            source={{uri: videoUrl}} // Can be a URL or a local file.
            resizeMode={"contain"}
            /* ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded */
            controls={true}
            style={styles.backgroundVideo}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 160,
    width: '90%',
    // borderWidth: 1
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 15,
  },

  movieArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // text 지정
  titleText: {
    fontSize: 20,
    color: 'black'
  },
});
