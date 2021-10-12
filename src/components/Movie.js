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
        <View style={styles.movieArea}>
          <Video
            source={{uri: videoUrl}} // Can be a URL or a local file.
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
    height: 240,
    width: '80%',
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },

  movieArea: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // text 지정
  titleText: {
    fontSize: 17,
  },
});
