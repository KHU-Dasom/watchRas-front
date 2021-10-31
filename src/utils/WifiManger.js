import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import {wifiName, wifiPassword} from '../axios/config';

// setting - https://github.com/JuanSeBestia/react-native-wifi-reborn/pull/216

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
