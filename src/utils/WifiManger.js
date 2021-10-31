import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import {wifiName, wifiPassword} from '../axios/config';

// setting - https://github.com/JuanSeBestia/react-native-wifi-reborn/pull/216

/* ==========================
Wifi 자동 연결 및 해제를 위한 함수

이 곳에서 wifi 연결하는 함수와 연결해제하는 함수를 구현해놓았습니다.
wifiname 및 wifipassword를 변경하고 싶다면 /src/axios/config에 가서 
wifiename과 wifipassword를 변경하면 자동으로 연결할 와이파이에 대한 정보를 수정할 수 있습니다.
========================== */

export const disconnectWifi = async () => {
  await WifiManager.isRemoveWifiNetwork(wifiName);
  console.log('disconnect');
};

export const connectWifi = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location permission is required for WiFi connections',
      message:
        '와이파이를 자동으로 설정하기 위해  ' +
        '위치 정보 제공 허용이 필요합니다.',
      buttonNegative: '거절',
      buttonPositive: '허용',
    },
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // You can now use react-native-wifi-reborn
    WifiManager.connectToProtectedSSID(wifiName, wifiPassword, false).then(
      () => {
        console.log('Connected successfully!');
      },
      () => {
        console.log('Connection failed!');
      },
    );
  } else {
    // Permission denied
  }
};
