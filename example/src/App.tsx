import * as React from 'react';

import { StyleSheet, View, Text, Switch } from 'react-native';
import { setSecureStatus } from 'react-native-disable-screenshots';

export default function App() {
  const [secureFlag, setSecureFlag] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>SECURE_FLAG: {secureFlag.toString()}</Text>
      <Switch
        value={secureFlag}
        onValueChange={(value) => {
          setSecureStatus(value);
          setSecureFlag(value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
