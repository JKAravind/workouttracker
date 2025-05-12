import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInputComponent, TextInput, FlatList } from 'react-native';
import axios from 'axios';

const AddWorkout = () => {
    const [searchQuery , setSearchQuery] = useState("")
    const [exerciseList , setExerciseList] = useState([]);
    const handleChange = (currentSearchQuery)=>{
        setSearchQuery(currentSearchQuery)        
    }

    useEffect(() => {
        if(!searchQuery.trim()==="") return;

        const debounceTimer = setTimeout(() => {
            apiCall(searchQuery)
        }, 1000);
        return () => {
            clearTimeout(debounceTimer)
        }
    }, [searchQuery])

    const renderItem = ({item})=>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        );

    }


    const apiCall = async (Query) =>{
        try{
            const Response = await axios.get(`https://api.api-ninjas.com/v1/exercises?name=${Query}`,{
        headers:{
            "X-Api-Key":"3D3yctaPuW9upnsbShUdASJKM0sbFY8qtHJxCZI4"
        }
    })
        console.log(Response)
        setExerciseList(Response.data)
        
        }
        catch (error){
            console.log(error)
        }
    }


    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Workout Screen</Text>
            <TextInput
            placeholder='Search'
            value={searchQuery}
            onChangeText={(currentSearchQuery)=>{handleChange(currentSearchQuery)}}
            autoCorrect={false}
            style={styles.search}>
            
            </TextInput>
            <FlatList
            data={exerciseList}
            renderItem={renderItem}

            
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    search:{
        borderWidth:2,
        margin:2,
        height:30,
        width:"60%",
        borderRadius:10,
        padding:20
    }
});

export default AddWorkout;