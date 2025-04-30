import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View , Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../utils/authContext';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
            console.log(Login)
            AuthState.logIn();
            router.replace("/")
        }


        catch(err){
            console.error(err)
            console.log("error")
        }

    }

    return (
        <View className="flex-1 items-center justify-center bg-blue-500 ">

            <Text>UserLogin</Text>

            <TextInput
            className="bg-white mt-4 rounded-2xl w-[200]"
            value={mail}
            onChangeText={(newMail)=>{
                setMail(newMail);
            }}
            placeholder='Enter Your Mail'
            
            />

            <TextInput
            className="bg-white mt-4 rounded-2xl w-[200]"
            value={password}
            onChangeText={(newPassword)=>{
                setPassword(newPassword)
            }}
            placeholder='Enter your Password'
            />

            <Button
            className= " mt-11 rounded-2xl w-[200]"
            onPress={handleLogin}
            title='Login'
            />

            <Button
            className= " mt-11 rounded-2xl w-[200]"
            onPress={()=>{
                AuthState.logIn()
                router.replace("/")
            }}
            title='RempLogin'
            />
            
            

            <TouchableOpacity onPress={()=>{
                router.replace("/register")
            }}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
