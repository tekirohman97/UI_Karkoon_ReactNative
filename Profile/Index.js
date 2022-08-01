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

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxProfile}>
        <View style={styles.rowProfle}>
          <ImageBackground
            source={require('../../Image/detail_prod.png')}
            style={{width: 70, height: 70}}
            imageStyle={{borderRadius: 50}}></ImageBackground>
          <View style={styles.colNamaProfile}>
            <Text style={styles.textNamaUser}>Vhendy Akriyono</Text>
            <Text style={styles.noHp}>+62******109</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonInformasiAlamat}>
        <Text style={styles.textInofrmasiAlamat}>Informasi Alamat</Text>
        <Image
          source={require('../../Image/next.png')}
          style={{width: 40, height: 40, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonKeluar}>
        <Text style={styles.textKeluar}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsStyle.backgroundColor,
    position: 'relative',
  },
  boxProfile: {
    padding: 16,
    marginTop: 8,
    backgroundColor: ColorsStyle.whitee,
  },
  rowProfle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colNamaProfile: {
    marginLeft: 8,
  },
  textNamaUser: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.black3,
  },
  noHp: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.abu2,
  },
  button: {
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderRadius: 24,
    backgroundColor: ColorsStyle.whitee,
    borderWidth: 1,
    borderColor: ColorsStyle.abu3,
  },

  textButton: {
    color: ColorsStyle.black3,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },

  buttonInformasiAlamat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 31,
    marginTop: 3,
    backgroundColor: ColorsStyle.whitee,
    height: 50,
  },
  textInofrmasiAlamat: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.black3,
  },
  buttonKeluar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 31,
    marginTop: 3,
    backgroundColor: ColorsStyle.whitee,
    height: 50,
  },
  textKeluar: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.redkPrimary,
  },
});
