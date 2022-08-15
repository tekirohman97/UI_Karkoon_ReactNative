import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';
import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const SuntingProfile = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/Back3.png')}
            style={{width: 37, height: 37}}
          />
        </TouchableOpacity>
        <Text style={styles.textWFP}>Sunting Profile</Text>
        <TouchableOpacity>
          <Image
            source={require('../../Image/check.png')}
            style={{width: 37, height: 37}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxBody}>
        <View style={styles.boxFotoProfile}>
          <ImageBackground
            source={require('../../Image/mt_foto.png')}
            style={{width: 70, height: 70, marginTop: 24}}
            imageStyle={{borderRadius: 50}}></ImageBackground>
          <TouchableOpacity>
            <Image
              source={require('../../Image/CameraBtn.png')}
              style={{
                width: 27,
                height: 27,
                resizeMode: 'contain',
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Boxnama}>
          <TouchableOpacity style={styles.boxButton}>
            <Text style={styles.Nama}>Nama</Text>
            <Text style={styles.changeNama}>Herman</Text>
            <Image
              source={require('../../Image/next2.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Boxnama}>
          <TouchableOpacity style={styles.boxButton}>
            <Text style={styles.Nama}>Tanggal lahir</Text>
            <Text style={styles.changeNama}>15/09/1997</Text>
            <Image
              source={require('../../Image/next2.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Boxnama}>
          <TouchableOpacity style={styles.boxButton}>
            <Text style={styles.Nama}>Nomor Ponsel</Text>
            <Text style={styles.changeNama}>Ganti Nomor</Text>
            <Image
              source={require('../../Image/next2.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SuntingProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },
  header: {
    height: 62,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: ColorsStyle.whitee,
  },
  textWFP: {
    fontFamily: 'Poppins-Bold',
    color: ColorsStyle.blackPrimary,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  boxBody: {
    alignItems: 'center',
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
    flexDirection: 'column',
  },
  boxFotoProfile: {
    marginBottom: 82,
  },
  Boxnama: {
    width: '100%',
  },
  boxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  Nama: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black3,
  },
  changeNama: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.black3,
  },
});
