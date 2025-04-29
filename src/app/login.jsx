import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View , Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../utils/authContext';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    const AuthState = useContext(AuthContext)

    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async () =>{

        try{
            const Login = await axios.post("http://192.168.0.151:3000/auth/login",{
                mail,
                password
            })
            console.log("redirecting to home")
            AuthState.logIn();
            router.replace("/")
        }


        catch(err){
            console.error(err)
            console.log("error")
        }

    }

    return (
        <View className="flex-1 items-center justify-center bg-blue-500">

            <Text>E-mail</Text>
            <TextInput
            value={mail}
            onChangeText={(newMail)=>{
                setMail(newMail);
            }}
            placeholder='Enter Your Mail'
            
            />

            <Text>Password</Text>
            <TextInput
            value={password}
            onChangeText={(newPassword)=>{
                setPassword(newPassword)
            }}
            placeholder='Enter your Password'
            />

            <Button onPress={handleLogin}
            title='Login'
            />
            
            

            <TouchableOpacity onPress={()=>{
                router.replace("/register")
            }}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
