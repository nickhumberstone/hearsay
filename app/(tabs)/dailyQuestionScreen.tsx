import { StyleSheet } from 'react-native';

import ConnectForm from '../../components/ConnectForm';
import { Text, View } from '../../components/Themed';

export default function DailyQuestionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question of the day</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ConnectForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
