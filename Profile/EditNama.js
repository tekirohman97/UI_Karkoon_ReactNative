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

const EditNamaPage = () => {
  const [nama, namaEdit] = React.useState(null);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/cancel.png')}
            style={{width: 37, height: 37, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={styles.textWFP}>Edit</Text>
        <TouchableOpacity>
          <Image
            source={require('../../Image/save.png')}
            style={{width: 37, height: 37, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxBody}>
        <View style={styles.boxInputRek}>
          <Text style={styles.rek}>Nama</Text>
          <TextInput
            style={styles.input}
            onChangeText={namaEdit}
            value={nama}
            placeholder="Viola Orela"
            keyboardType="text"
          />
        </View>
      </View>
    </View>
  );
};

export default EditNamaPage;

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
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderBottomWidth: 1.0,
    borderBottomColor: ColorsStyle.abu,
    paddingVertical: 10,
    marginTop: 0,
  },
  boxBody: {
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
    flexDirection: 'column',
    height: '100%',
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
  rek: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  boxInputRek: {
    marginTop: 26,
    paddingHorizontal: 20,
  },
});
