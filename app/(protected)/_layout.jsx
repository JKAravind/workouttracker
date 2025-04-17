
import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function ProtectedLayout() {
  const isLogged = true;
  if(!isLogged){
    return <Redirect href="/login" />;
  }
  
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
