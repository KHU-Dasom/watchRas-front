import React from 'react';
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

export const ListTable = ({
  title,
  info,
  vedioData,
  pictureData,
  selector,
  profileImage,
}) => {
  return (
    <FlatList
      ListHeaderComponent={
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
      }
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
});
