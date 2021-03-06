import React, {useCallback} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableView} from './TouchableView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* ==========================
TableElement
List의 항목을 나타냅니다.
========================== */

export const TableElement = ({title, createDate, fileType, key, targetDir}) => {
  const navigation = useNavigation();

  const goDetail = useCallback(
    () =>
      navigation.navigate('Detail', {
        title: title,
        createDate: createDate,
        fileType: fileType,
        targetDir: targetDir,
      }),
    [title, createDate, fileType, targetDir],
  );

  return (
    <>
      <TouchableView
        style={styles.tochableOuterView}
        onPress={() => {
          goDetail();
        }}>
        <View style={styles.rowViewStyle}>
          <Text numberOfLines={1} style={styles.titleTextStyle}>
            {title}
          </Text>
          <Icon
            style={{right: -7}}
            name="chevron-right"
            size={25}
            color="#8e8d92"
          />
        </View>
        {/* <View style={styles.contentViewStyle}>
          <Text style={styles.subTextStyle}>생성일</Text>
          <Text style={styles.subContentTextStyle}>{createDate}</Text>
        </View> */}
      </TouchableView>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View
          style={{
            borderWidth: 0.5,
            width: '90%',
            alignItems: 'center',
            borderColor: '#d4d6df',
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tochableOuterView: {
    backgroundColor: 'white',
    borderColor: '#d4d6df',
    padding: 15,
  },
  rowViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentViewStyle: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  subTextStyle: {
    fontSize: 12,
    color: '#8e8d92',
    marginRight: 5,
  },
  subContentTextStyle: {
    color: 'black',
    fontSize: 12,
    left: 10,
  },
});
