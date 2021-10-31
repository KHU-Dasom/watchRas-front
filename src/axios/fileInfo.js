import axios from 'axios';
import {root} from './config';

const URL = `${root}:8090/METAFIGURE`;

export const getFileInfo = async (directory = '', fileName, setState) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}/${fileName}`,
  }).then(res => {
    // console.log(res.data);
    setState(res.data);
  });
};
