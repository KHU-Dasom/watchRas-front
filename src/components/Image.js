import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {root} from '../axios/config';

/* ==========================
Image 
Detail Screen에서 이미지를 보여줍니다.
========================== */

export const ImageElement = ({title, targetDir}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showImageViewer, setShowImageViewer] = useState(false);

  const imageUrl = `${root}:8090/${targetDir}/Contents/` + title; // 추후 폴더 구조 변경시 이미지 파일이 위치한 곳으로 변경해주어야 합니다.

  const images = [
    {
      url: imageUrl,
    },
  ];

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

      <Image
        source={{uri: imageUrl}}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width,
        }}
        resizeMode="contain"
        onLoad={() => setIsLoading(false)}
      />

      <Modal
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
      </Modal>
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
