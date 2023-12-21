import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@utils/colors';
import { fonts } from '@utils/fonts';
import Login from '@views/auth/Login';

interface Props {}

const App: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.MONTSERRAT_BLACK,
    padding: 0,
  },
});

export default App;
