import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { View , Text } from 'react-native';
import { AuthContext } from '../utils/authContext';
import { TouchableOpacity } from 'react-native';

export default function Login() {
    const router = useRouter();
    const AuthState = useContext(AuthContext)

    return (
        <View className="flex-1 items-center justify-center bg-blue-500">
            <TouchableOpacity onPress={()=>
            {AuthState.logIn();
            console.log(AuthState.isLoggedIn);
            router.replace("/")}
            }>
                                <Text>Login Page</Text>

                </TouchableOpacity>
        </View>
    );
}
