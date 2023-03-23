import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';
import { useEffect } from 'react';
import { stringifyValueWithProperty } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

export default function App() {
  const brand=Device.brand;
  const Dname=Device.designName;
  const devicename=Device.deviceName;
  const deviceyearclass=Device.deviceYearClass;
  const isdevice=Device.isDevice;
  const dmanufacture=Device.manufacturer;
  const deviceid=Device.deviceid;
  const modelid=Device.modelId;
  const modelname=Device.modelName;

  const osbuildfingerprint=Device.osBuildFingerprint;
  const osbuildid=Device.osBuildId;
  const osinternalbuildid=Device.osInternalBuildId;
  const osname=Device.osName;
  const osversion=Device.osVersion;
  const platformapilevel=Device.platformapilevel;
  const productname=Device.productname;
  const scpuarchi=Device.supportedCpuArchitectures;
  const totalmemory=Device.totalMemory;
  const devicetype='';

  useEffect(()=>{
    (async()=>{
      const { status} = await Device.getDeviceTypeAsync();
      if(status === "granted"){
          devicetype="Granted";
      } else {
        devicetype="Permission to access contacts denied.";
      }

    })();
  },[]);


  return (
    <View style={styles.container}>
      
      <Text>Brand       : {brand}</Text>
      <Text>Design-Name : {Dname}</Text>
      <Text>Device-Name : {devicename}</Text>
      <Text>DeviceYearClass : {deviceyearclass}</Text>
      {isdevice?<Text>IsPhycialDevice : True</Text>:<Text>IsPhycialDevice : Fasle</Text>}
      <Text>DeviceManufacture : {dmanufacture}</Text>
      <Text>DeviceID : {deviceid}</Text>
      <Text>ModelID : {modelid}</Text>
      <Text>ModelID : {modelid}</Text>
      <Text>ModelName : {modelname}</Text>
      <Text>DeviceType : {devicetype}</Text>
      <Text>OSBuildfingerprint : {osbuildfingerprint}</Text>
      <Text>osbuildid : {osbuildid}</Text>
      <Text>osinternalbuildid : {osinternalbuildid}</Text>
      <Text>osname : {osname}</Text>
      <Text>osversion : {osversion}</Text>
      <Text>platformapilevel : {platformapilevel}</Text>
      <Text>productname : {productname}</Text>
      <Text>supportedCpuArchitectures : {scpuarchi}</Text>
      <Text>totalmemory : {totalmemory}</Text>
      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
