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

import {ColorsStyle} from '../../Styles/Colors';
import Gstyles from '../../Styles/GlobalStyle';

const PerincianPesananPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Image/Back3.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.textOrderSummary}>Perincian Pesanan</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxPaymentDeadline}>
          <View style={styles.rowPaymentDeadLine}>
            <Text style={styles.textPaymentDeadLine}>Menunggu Pembayaran</Text>
          </View>
          <View style={styles.rowDeadline}>
            <Text style={styles.textTgl}>Sabtu, 19 Juni 2021</Text>
            <Text style={styles.textJam}>02.29 WIB</Text>
            <Text style={styles.textJamMundur}>23:58:31</Text>
          </View>
        </View>
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
              <Text style={styles.textQuantity}>x1</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxTransferBank}>
          <View style={styles.rowTransferManual}>
            <Text style={styles.textTransferManual}>
              Transfer Bank (Verifikasi Manual)
            </Text>
            <Image
              source={require('../../Image/bca.png')}
              style={{width: 46, height: 25, resizeMode: 'contain'}}
            />
          </View>
          <Image
            source={require('../../Image/line2.png')}
            style={{width: 360, resizeMode: 'contain', marginBottom: 15}}
          />
          <View style={styles.rowNoRek}>
            <View style={styles.colNoRek}>
              <Text style={styles.textRek}>Nomor Rekening</Text>
              <Text style={styles.textNoRek}>392 778 8890</Text>
              <Text style={styles.textRek}>PT Karkoon Mandiri Sentosa</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../Image/salin.png')}
                style={{width: 69, height: 36, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowAmount}>
            <View style={styles.colAmount}>
              <Text style={styles.textRek}>Total Pembayaran</Text>
              <Text style={styles.textNoRek}>Rp142.262</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../Image/salin.png')}
                style={{width: 69, height: 36, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxRincianPesanan}>
          <Text style={styles.textRincianPesanan}>Rincian Peasan</Text>
          <TouchableOpacity>
            <Image
              source={require('../../Image/arrow_up.png')}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxIsiRincianPesanan}>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Nomor Pesanan</Text>
            <Text style={styles.textIsiPesanan}>#6279870</Text>
          </View>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Tanggal Pemesanan</Text>
            <Text style={styles.textIsiPesanan}>19 Juni 2021, 13:21</Text>
          </View>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Metode Pembayaran</Text>
            <Text style={styles.textIsiPesanan}>Bank Transfer BCA</Text>
          </View>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Verifikasi Pembayaran</Text>
            <Text style={styles.textIsiPesanan}>19 Juni 2021, 14:31</Text>
          </View>
        </View>
        <View style={styles.boxRincianPesanan}>
          <Text style={styles.textRincianPesanan}>Total Belanja</Text>
          <TouchableOpacity>
            <Image
              source={require('../../Image/arrow_up.png')}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxIsiRincianPesanan}>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Subtotal</Text>
            <Text style={styles.textIsiPesanan}>Rp142.000</Text>
          </View>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Ongkos Kirim</Text>
            <Text style={styles.textIsiPesanan}>Rp9.000</Text>
          </View>
          <View style={styles.rowIsiPesanan}>
            <Text style={styles.textIsiPesanan}>Total</Text>
            <Text style={styles.textIsiPesanan}>Rp152.000</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Saya Sudah Bayar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PerincianPesananPage;

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
    marginTop: 2,
    backgroundColor: ColorsStyle.whitee,
  },
  textOrderSummary: {
    fontFamily: 'Poppins-SemiBold',
    color: ColorsStyle.blackPrimary,
    fontSize: 20,
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
  },
  textPaymentDeadLine: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
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
  boxProduct: {
    padding: 20,
    backgroundColor: ColorsStyle.whitee,
    height: 115,
    marginTop: 2,
  },
  wrapProduct: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxNamaProd: {
    flex: 1,
    marginLeft: 5,
  },
  textNamaProd: {
    fontFamily: 'Poppins-Bold',
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
    bottom: 0,
    right: 0,
  },
  textQuantity: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.black4,
  },
  boxTotal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textTotal: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
    marginBottom: 14,
  },
  textTotalHarga: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: ColorsStyle.blackPrimary,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderRadius: 4,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 28,
    flex: 1,
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  boxTotalOrder: {
    height: 120,
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
  total: {
    flexDirection: 'row',
  },
  textMerah: {
    color: ColorsStyle.redSecondary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },

  //   Box Tranfer Bank

  boxTransferBank: {
    height: 263,
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

  //   Rincian Pesanan

  boxRincianPesanan: {
    backgroundColor: ColorsStyle.whitee,
    padding: 16,
    marginTop: 2,
    height: 48,
    flexDirection: 'row',
  },
  textRincianPesanan: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    color: ColorsStyle.blackPrimary,
    fontSize: 14,
  },
  boxIsiRincianPesanan: {
    backgroundColor: ColorsStyle.whitee,
    paddingHorizontal: 16,
    paddingTop: 12,
    marginTop: 2,
  },
  rowIsiPesanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textIsiPesanan: {
    fontFamily: 'Poppins-Regular',
    color: ColorsStyle.black3,
    fontSize: 14,
  },
});
