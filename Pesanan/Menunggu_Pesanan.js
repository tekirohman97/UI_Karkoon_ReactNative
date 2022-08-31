import React from 'react';

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
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const MenungguPesananPage = () => {
  const [number, noRek] = React.useState(null);
  const [text, nama] = React.useState(null);
  const [textB, bank] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/Back3.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <Text style={styles.textWFP}>Konfirmasi Pembayaran</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxBuktiPembayaran}>
          <Text style={styles.textBuktiPembayaran}>
            Pastikan Bukti Pembayaran Menampilkan:
          </Text>
          <Text style={styles.textbulet}>
            {'\u2B24'} Tanggal waktu transfer
          </Text>
          <Text style={styles.textbulet}>{'\u2B24'} Status Berhasil</Text>
          <Text style={styles.textbulet}>{'\u2B24'} Detail Penerima</Text>
          <Text style={styles.textbulet}>{'\u2B24'} Jumlah Transfer</Text>
        </View>
        <View style={styles.boxConfirm}>
          <Text style={styles.textInfoRek}>Info Rekening Bank</Text>
          <View style={styles.boxInputRek}>
            <Text style={styles.rek}>Nomor Rekening</Text>
            <TextInput
              style={styles.input}
              onChangeText={noRek}
              value={number}
              placeholder="1234567890"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.boxInputRek}>
            <Text style={styles.rek}>Nama</Text>
            <TextInput
              style={styles.input}
              onChangeText={nama}
              value={text}
              placeholder="Jhon Doe"
              keyboardType="text"
            />
          </View>
          <View style={styles.boxInputRek}>
            <Text style={styles.rek}>Nomor Rekening</Text>
            <TextInput
              style={styles.input}
              onChangeText={bank}
              value={textB}
              placeholder="BNI"
              keyboardType="text"
            />
          </View>
          <View style={styles.boxHowToPlay}>
            <Text style={styles.textPenting}>
              Penting! Pastikan Anda telah melengkapi semua informasi pembayaran
              sebelum mengunggah tanda terima pembayaran
            </Text>
          </View>
        </View>
        <View style={styles.boxChoseImage}>
          <Text style={styles.formatGambar}>
            Format gambar: JPG, JPEG, PNG, Max 10 Mb
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLanjut}>
            <Text style={styles.textButtonLanjut}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenungguPesananPage;

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
  boxPaymentDeadline: {
    height: 92,
    width: '100%',
    backgroundColor: ColorsStyle.whitee,
    padding: 20,
    marginTop: 3,
  },

  rowPaymentDeadLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  textPaymentDeadLine: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  rowDeadline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTgl: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black3,
    marginRight: 5,
  },
  textJam: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black3,
    flex: 1,
  },
  textJamMundur: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: ColorsStyle.redSecondary,
  },
  boxTransferBank: {
    height: 350,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
    padding: 20,
  },
  rowTransferManual: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  textTransferManual: {
    flex: 1,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  rowNoRek: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  colNoRek: {
    flex: 1,
  },
  textRek: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.colorText,
  },
  textNoRek: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  rowAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colAmount: {
    flex: 1,
  },
  textHowToPlay: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: ColorsStyle.redSecondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  textPenting: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.blackPrimary,
  },
  boxHowToPlay: {
    backgroundColor: '#FFF1F1',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 20,
  },
  input: {
    height: 45,
    borderBottomWidth: 1.0,
    borderBottomColor: ColorsStyle.abu,
    paddingVertical: 10,
    marginTop: 0,
  },

  boxConfirm: {
    height: 430,
    padding: 20,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
  },
  textConfirm: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  textInfoRek: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.abu,
  },
  rek: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: ColorsStyle.abu,
  },
  boxInputRek: {
    marginTop: 25,
  },
  textHowToUpload: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: ColorsStyle.redSecondary,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 10,
    backgroundColor: ColorsStyle.whitee,
    borderWidth: 1,
    borderColor: ColorsStyle.redSecondary,
    marginBottom: 10,
  },

  textButton: {
    color: ColorsStyle.redSecondary,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  buttonLanjut: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderRadius: 10,
    backgroundColor: ColorsStyle.abuButton,
  },

  textButtonLanjut: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  boxChoseImage: {
    height: 180,
    padding: 20,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
    alignItems: 'center',
  },
  formatGambar: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: ColorsStyle.abu,
    marginBottom: 20,
  },
  boxBuktiPembayaran: {
    height: 188,
    backgroundColor: ColorsStyle.whitee,
    marginTop: 3,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textBuktiPembayaran: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: ColorsStyle.black3,
  },
  textbulet: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    marginTop: 16,
    color: ColorsStyle.black3,
  },
});
