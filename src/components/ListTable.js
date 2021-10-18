import React from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import {TableElement} from './ListTableElement';

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
            <Image
              style={{width: '100%'}}
              resizeMode="contain"
              source={require(`http://192.168.2.1:8090/Cover/${profileImage}`)}
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
  );
};

const styles = StyleSheet.create({
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
});
