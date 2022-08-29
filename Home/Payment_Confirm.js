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

const PaymentConfirmPage = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../../Image/x.png')}
          style={{
            width: 44,
            height: 44,
            resizeMode: 'contain',
            position: 'absolute',
            top: 24,
            left: 10,
          }}
        />
      </TouchableOpacity>
      <View style={styles.conten}>
        <Image
          source={require('../../Image/menunggu_verif.png')}
          style={{
            width: 250,
            height: 200,
            resizeMode: 'contain',
            marginBottom: 30,
          }}
        />
        <Text style={styles.textPayment}>Menunggu Verifikasi</Text>
        <Text style={styles.textOderNumber}>Nomor Pesanan #6279870</Text>
        <Text style={styles.textYourOrder}>
          Pembayaran kamu akan terverifikasi 1x24 jam
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Check Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentConfirmPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsStyle.whitee,
    position: 'relative',
  },
  conten: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  textPayment: {
    color: ColorsStyle.green,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 15,
  },
  textOderNumber: {
    color: ColorsStyle.blackPrimary,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
  },
  textYourOrder: {
    color: ColorsStyle.blackPrimary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '100%',
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: ColorsStyle.redSecondary,
  },

  textButton: {
    color: ColorsStyle.whitee,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});
