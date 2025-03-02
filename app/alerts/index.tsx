import ThemedButton from '@/presentation/share/ThemedButton';
import ThemedText from '@/presentation/share/ThemedText';
import ThemedView from '@/presentation/share/ThemedView';
import { Alert } from 'react-native';
const AlertsScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);


  return (
    <ThemedView className='mx-4'>
      <ThemedText type='h2'>AlertsScreen</ThemedText>
      <ThemedView className='mx-12'>
        <ThemedButton onPress={createTwoButtonAlert}>create 2 button</ThemedButton>
        <ThemedButton onPress={createThreeButtonAlert}>create 3 button </ThemedButton>
      </ThemedView>
    </ThemedView>
  );
};
export default AlertsScreen;
