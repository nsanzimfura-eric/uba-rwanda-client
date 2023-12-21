import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {}

const ExampleHome: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      Example of home components, id any, if not , delete home folder
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ExampleHome;
