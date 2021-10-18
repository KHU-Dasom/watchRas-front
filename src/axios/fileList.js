import axios from 'axios';

const URL = 'http://192.168.2.1:8091/api/directory';

const setFileType = (list, fileType) => {
  list = list.map(item => {
    item.fileType = fileType;
  });

  return list;
};

export const getFileList = async (directory = '', setState, fileType) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}`,
  }).then(res => {
    setState(setFileType(res.data.files, fileType));
  });
};
