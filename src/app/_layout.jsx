import { Stack } from "expo-router";
import React from "react";
import { AuthContextProvider } from "../utils/authContext";
import '../../global.css';


export default function RootLayout(){
    return(
        <AuthContextProvider >

            
        <Stack>
            <Stack.Screen name="(protected)" />
        </Stack>

        </AuthContextProvider>


    );
}