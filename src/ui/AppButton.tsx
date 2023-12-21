import { colors } from '@utils/colors';
import { fonts } from '@utils/fonts';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, ButtonProps } from 'react-native';

interface Props extends ButtonProps {
  handleOnPress: () => void;
  fullWidth: boolean;
}

const AppButton: FC<Props> = (props) => {
  const { fullWidth, title, handleOnPress } = props;
  return (
    <TouchableOpacity
      style={fullWidth ? styles.button : styles.buttonShort}
      onPress={handleOnPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // button
  button: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  buttonShort: {
    borderRadius: 5,
    height: 37,
    display: 'flex',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
  },
  buttonText: {
    color: colors.LIGHT,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AppButton;
