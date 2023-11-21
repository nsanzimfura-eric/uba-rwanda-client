import colors from '@utils/colors';
import SignUp from '@views/auth/signup';
import React, {FC} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

interface Props {}

const App: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: colors.DARK,
  },
});

export default App;
