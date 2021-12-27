import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TableElement} from './ListTableElement';
import {root} from '../axios/config';

/* ==========================
ListTable
해당 컴포넌트에서 ListTableElement를 이용하여,
List를 만듭니다. List에는 사진과 동영상의 제목이 있습니다.
========================== */

export const ListTable = ({
  title,
  info,
  vedioData,
  pictureData,
  selector,
  profileImage,
  targetDir,
}) => {
  const HeaderComponent = useCallback(() => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.figureOuterViewStyle}>
          {profileImage == undefined ? null : (
            <Image
              style={{
                width: Dimensions.get('window').width * (1 / 2),
                height: Dimensions.get('window').width * (9 / 16),
              }}
              resizeMode="contain"
              source={{
                uri: `${root}:8090/METAFIGURE/Table/${profileImage[0].title}`,
              }}
            />
          )}
        </View>
        <View style={{flex: 1}}>
          {/* <Text style={styles.figureTitleStyle}>{title}</Text> */}
          {info == undefined ? null : (
            <Text style={styles.figureTitleStyle}>{info.split('\n')[0]}</Text>
          )}
          <Text style={styles.figureTextStyle}>{info}</Text>
        </View>
      </View>
    );
  }, [profileImage, info]);
  return (
    <>
      <HeaderComponent />
      <FlatList
        // ListHeaderComponent={HeaderComponent}
        data={selector == 'Contents' ? vedioData : pictureData}
        renderItem={({item, index}) =>
          item == null ? null : (
            <TableElement
              title={item.title}
              createDate={item.createDate}
              fileType={item.fileType}
              key={index}
            />
          )
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  figureOuterViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').width * (9 / 16),
  },
  figureTitleStyle: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  figureTextStyle: {
    flex: 10,
    fontSize: 14,
    color: 'black',
  },
});
