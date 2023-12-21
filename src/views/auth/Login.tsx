import { colors } from '@utils/colors';
import { fonts } from '@utils/fonts';
import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

interface Props {}

const Login: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>UBER RWANDA</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.DARK,
    padding: 24,
    gap: 18,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'san-serif',
    color: colors.LIGHT,
    fontSize: 36,
    textAlign: 'center',
  },
});

export default Login;
