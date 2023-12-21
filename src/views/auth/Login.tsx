import AppButton from '@ui/AppButton';
import AppInput from '@ui/AppInput';
import { assets } from '@utils/assets';
import { colors } from '@utils/colors';
import { fonts } from '@utils/fonts';
import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, Image, View, Text } from 'react-native';

interface Props {}

const Login: FC<Props> = () => {
  const handleLoginSubmit = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={assets.LoginPageImage}
        style={styles.loginImage}
        alt="Login SVG"
      />
      <View style={styles.titleBox}>
        <Image
          source={assets.CirclesLoginSVG}
          style={styles.titleCircleImage}
          alt="Login SVG"
        />
        <Text style={styles.title}>Data Collection App</Text>
      </View>
      <Text style={styles.labelLogin}>Login, to Start Collecting data</Text>
      <AppInput
        iconUrl={assets.PhoneIcon}
        placeholder="Your telephone"
        keyboardType="number-pad"
      />
      <AppButton
        fullWidth={true}
        title="Send OTP"
        handleOnPress={handleLoginSubmit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.LIGHT,
    padding: 24,
    gap: 18,
    alignItems: 'center',
  },
  loginImage: {
    width: '66.41221374045802%',
    aspectRatio: 1 / 1,
    height: 'auto',
    marginTop: 50,
  },
  titleBox: {
    display: 'flex',
    width: '100%',
    gap: 9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  titleCircleImage: {
    width: 40,
    aspectRatio: 1 / 1,
    height: 'auto',
  },
  title: {
    fontSize: 24,
    color: colors.PRIMARY,
    fontFamily: fonts.MONTSERRAT_BOLD,
    fontWeight: 'bold',
  },
  labelLogin: {
    width: '100%',
    color: colors.ACCENT_DARK,
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    fontSize: 17,
    marginTop: 29,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
});

export default Login;
