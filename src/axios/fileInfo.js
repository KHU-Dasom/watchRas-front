import axios from 'axios';
import {root} from './config';

const URL = `${root}:8090/METAFIGURE`;

/* ==========================
fileInfo.js
이 부분에서, axios 통신을 이용하여,
라즈베리 파이의 파일을 받아옵니다.
========================== */

export const getFileInfo = async (directory = '', fileName, setState) => {
  await axios({
    method: 'get',
    url: `${URL}/${directory}/${fileName}`,
  }).then(res => {
    // console.log(res.data);
    setState(res.data);
  });
};
