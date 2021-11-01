/* ==========================
config.js
해당 부분에서, 라즈베리 파이의 ip와 wifiName, wifiPassword를 컨트롤합니다.

여기 설정 부분 외에도, 파일의 구조가 변경될 시, 아래와 같은 부분의 변경이 필요합니다.
components/
ListTable.js - uri: `${root}:8090/METAFIGURE/Table/${profileImage[0].title}`
Image.js - const imageUrl = `${root}:8090/METAFIGURE/Contents/` + title;
Movie.js -  const videoPath = `${root}:8090/METAFIGURE/Contents/` + title;
========================== */

export const root = 'http://192.168.2.1'; // 라즈베리파이 주소
export const wifiName = 'CHM-AI'; // 와이파이 이름
export const wifiPassword = 'chmai123'; // 와이파이 비밀번호
