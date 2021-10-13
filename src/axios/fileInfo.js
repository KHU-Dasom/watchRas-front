import axios from 'axios';

const URL = '';

export const getFileInfo = async (directory = '', fileName, setState) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}/${fileName}`,
  }).then(res => {
    console.log(res.data);
    setState(res.data);
  });
};
