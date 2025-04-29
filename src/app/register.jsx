import { router } from "expo-router";
import { useState } from "react";
import { View ,Text, TextInput,Button, Alert} from "react-native";
import axios from "axios";



export default function Register (){

    const [mail,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const regex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-z]{2,}$/


    const handleRegister = async () =>{
        
        try{

            if (!(regex.test(mail))){
                Alert.alert("Invalid Email","Pleas enter a valid email ID")
                return
            }

            if ((mail.trim()==="") || (username.trim()==="")|| (password.trim()=="")){
                Alert.alert("Invalid Box","Pleas Fill all the box")
                return;
            }






            const Response = await axios.post("http://192.168.0.151:3000/auth/register",{
                
                mail,
                username,
                password
            })
            console.log(Response)
            Alert.alert("Successfull Registered","You will be redirect To login Screen")
            router.replace("/login")
        }
        catch(err){
            console.error(err)
        }
    }


    return(
        <View>
            <Text>Register</Text>

            <Text>Email</Text>
            <TextInput
            value={mail}
            onChangeText={(newMail)=>{
                setEmail(newMail);
            }}
            placeholder="enter your mail"
            />

            <Text>Username</Text>
            <TextInput
            value={username}
            onChangeText={setUsername}
            />

            <Text>Password</Text>
            <TextInput
            value={password}
            onChangeText={setPassword}
            />

            <Button
            onPress={handleRegister}
            title="Submit"
            
            />

        </View>
    );
}