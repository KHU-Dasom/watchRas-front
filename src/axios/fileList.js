import axios from 'axios';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {root} from './config';

const URL = `${root}:8091/api/directory`;

/* ==========================
fileList.js
이 부분에서, axios 통신을 이용하여,
라즈베리 파이에 파일 리스트를 받아옵니다.
========================== */

const setFileType = (list, fileType) => {
  if (list.length == 0) return undefined;
  const result = list.map(item => {
    return {fileType: fileType, title: item};
  });

  return result;
};

const setFileTypeAuto = (list, fileType) => {
  // console.log('item: ', list);
  const result = list.map(item => {
    var fileLen = item.length;
    var lastDot = item.lastIndexOf('.');
    var fileExt = item.substring(lastDot + 1, fileLen).toLowerCase();
    var itemFileType;
    console.log('fileExt', fileExt.trim());

    const pictureAry = ['png', 'jpg', 'jpeg', 'bmp'];

    if (fileExt.trim() in pictureAry) {
      itemFileType = 'picture';
    } else itemFileType = 'video';

    if (itemFileType === fileType) {
      return {fileType: fileType, title: item};
    }
  });
  console.log(result);
  return result;
};

export const getFileList = async (directory = '', setState, fileType) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}`,
  })
    .then(res => {
      console.log(res.data.data.files);
      setState(setFileType(res.data.data.files, fileType));
    })
    .catch(console.error);
};

export const getFileListAuto = async (directory = '', setState, fileType) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}`,
  })
    .then(res => {
      console.log(res.data.data.files);
      setState(setFileTypeAuto(res.data.data.files, fileType));
    })
    .catch(console.error);
};
