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
} from 'react-native';
import {CheckBox} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const PesananPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textWFP}>Pesanan</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.boxTabBar}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTabA}>Semua</Text>
          <Image
            source={require('../../Image/indicator.png')}
            style={{
              resizeMode: 'contain',
              height: 5,
              width: 50,
              position: 'absolute',
              bottom: 0,
              left: 12,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>Belum Dibayar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>Menunggu Konfirmasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>DI Proses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>Di Kriim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>Tiba di Tujuan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTab}>
          <Text style={styles.textTab}>Selesai</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.boxProduct}>
        <View style={styles.wrapProduct}>
          <Image
            source={require('../../Image/detail_prod.png')}
            style={{width: 81, height: 81, resizeMode: 'contain'}}
          />
          <View style={styles.boxNamaProd}>
            <Text style={styles.textNamaProd}>
              Sweater Cardigan Korea Wanita Bahan Halus Lembut Tebal Premi...
            </Text>
            <Text style={styles.textColorSize}>Color: Blue, Size: L</Text>
            <Text style={styles.textNamaProd}>Rp142.000</Text>
          </View>
          <View style={styles.boxQuantity}>
            <Text style={styles.textQuantity}>
              1X {'\n'} 1 item: IDR. 142.000
            </Text>
          </View>
        </View>
        <View style={styles.boxButon}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Lanjutkan Pembayaran</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PesananPage;

const styles = StyleSheet.create({
  container: {
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
    fontFamily: 'Poppins-SemiBold',
    color: ColorsStyle.blackPrimary,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  boxTabBar: {
    marginTop: 3,
    height: 40,
    backgroundColor: ColorsStyle.whitee,
  },
  buttonTab: {
    padding: 10,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 6,
  },
  indicator: {
    height: 3,
    color: ColorsStyle.redSecondary,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textTabA: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black4,
  },
  textTab: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.abuButton2,
  },
  boxProduct: {
    backgroundColor: ColorsStyle.whitee,
    height: 218,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxNamaProd: {
    flex: 1,
    marginLeft: 5,
  },
  textNamaProd: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  textColorSize: {
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.colorText,
    fontSize: 12,
  },
  boxQuantity: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -20,
    right: 0,
  },
  textQuantity: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black4,
  },
  boxButon: {
    marginTop: 40,
    alignItems: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: 4,
    width: '60%',
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});
