
import { Redirect, router, Stack } from 'expo-router';
import { useContext } from 'react';
import {AuthContext} from "../../utils/authContext"


import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function ProtectedLayout() {
  const authState = useContext(AuthContext)
  console.log(authState.isLoggedIn)
  if (!authState.isLoggedIn){
    return <Redirect href="/login"/>
  }
  
  
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
