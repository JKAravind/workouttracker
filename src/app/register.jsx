import { router } from "expo-router";
import { useState } from "react";
import { View ,Text, TextInput,Button} from "react-native";



export default function Register (){

    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")


    return(
        <View>
            <Text>Register</Text>

            <Text>Email</Text>
            <TextInput
            value={email}
            onChangeText={(newMail)=>{
                setEmail(newMail);
                console.log(email)
            }}
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
            onPress={()=>router.replace("/login")}
            title="Learn More"
            
            />

        </View>
    );
}