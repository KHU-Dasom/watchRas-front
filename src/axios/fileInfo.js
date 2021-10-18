import axios from 'axios';

const URL = '192.168.2.1:8090/api/directory';

export const getFileInfo = async (directory = '', fileName, setState) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}/${fileName}`,
  }).then(res => {
    console.log(res.data);
    setState(res.data);
  });
};
