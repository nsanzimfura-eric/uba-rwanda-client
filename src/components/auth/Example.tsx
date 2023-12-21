import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {}

const Example: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      Example of Auth components, id any, if not , delete auth folder
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Example;
