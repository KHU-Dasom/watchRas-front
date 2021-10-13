import axios from 'axios';

const URL = '';

const setFileType = (list, fileType) => {
  list = list.map(item => {
    item.fileType = fileType;
  });
};

export const getFileList = async (directory = '', setState, fileType) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}`,
  }).then(res => {
    console.log(setFileType(res.data));
    setState(setFileType(res.data, fileType));
  });
};
