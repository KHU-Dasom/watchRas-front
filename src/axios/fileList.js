import axios from 'axios';
import {root} from './config';

const URL = `${root}:8091/api/directory`;

const setFileType = (list, fileType) => {
  const result = list.map(item => {
    return {fileType: fileType, title: item};
  });

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
