import colors from '@utils/colors';
import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface Props {}

const SignUp: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Full name"
        placeholderTextColor={colors.DARK_GRAY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 15,
    flex: 1,
  },
});

export default SignUp;
