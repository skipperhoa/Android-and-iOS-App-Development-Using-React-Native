import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';



export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text style={{ textAlign: 'center', margin: 20 }}>
        This screen doesn't exist. You can create it in the app directory.
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
