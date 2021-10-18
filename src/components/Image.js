import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ImageElement = ({title}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const imageUrl = 'http://192.168.2.1:8090/Picture/' + title;
  // const images = [
  //   {
  //     props: {
  //       source: require(imageUrl),
  //     },
  //   },
  // ];

  const toggleImageViewer = () => {
    setShowImageViewer(showImageViewer => !showImageViewer);
  };

  return (
    <TouchableOpacity
      onPress={toggleImageViewer}
      style={{alignItems: 'center'}}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {/* <Image
        source={require(imageUrl)}
        style={{width: '100%'}}
        resizeMode="contain"
        onLoad={() => setIsLoading(false)}
      /> */}

      {/* <Modal
        visible={showImageViewer}
        transparent
        onRequestClose={toggleImageViewer}
        animationType="slide">
        <ImageViewer
          renderHeader={() => (
            <View style={styles.ImageViewerHeader}>
              <TouchableOpacity
                style={styles.closeArea}
                onPress={() => {
                  toggleImageViewer();
                }}>
                <Icon name="close" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          )}
          imageUrls={images}
          onCancel={toggleImageViewer}
          enableSwipeDown
          enableImageZoom
          renderIndicator={() => null}
        />
      </Modal> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  ImageViewerHeader: {
    alignSelf: 'flex-end',
  },
  closeArea: {
    margin: 10,
  },
});
