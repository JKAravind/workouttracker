import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity , Button } from 'react-native';
import axios from 'axios';
import useExerciseStore from '../../../stores/selectedExercises';
import { router } from 'expo-router';

const AddWorkout = () => {

    const selectedExercises = useExerciseStore((state)=>{return state.selectedExercises})
    const addExercise = useExerciseStore((state)=>{return state.addExercise})

    const [searchQuery , setSearchQuery] = useState("")
    const [exerciseList , setExerciseList] = useState([]);
    const handleChange = (currentSearchQuery)=>{
        setSearchQuery(currentSearchQuery)        
    }


    useEffect(() => {
        if(!searchQuery.trim()==="") return;

        const debounceTimer = setTimeout(() => {
            apiCall(searchQuery)
        }, 200);
        return () => {
            clearTimeout(debounceTimer)
        }
    }, [searchQuery])


    const handleAddExercise = (item)=>{
        addExercise(item)
        console.log(selectedExercises)

    }

    const renderItem = ({item})=>{
        return(

                <TouchableOpacity style={styles.exerciseContainer} onPress={()=>handleAddExercise(item)}>
                                <Text>{item.name}</Text>
                </TouchableOpacity>
            
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
            <View style={styles.header}>

                <Text style={styles.text}>Add Workout Screen</Text>
                <TextInput
                placeholder='Search'
                value={searchQuery}
                onChangeText={(currentSearchQuery)=>{handleChange(currentSearchQuery)}}
                autoCorrect={false}
                style={styles.search}>
                </TextInput>

            </View>
            
            <FlatList
            data={exerciseList}
            renderItem={renderItem}
            contentContainerStyle={{  width:"100%",alignItems:"center" }}
            ></FlatList>

            <Button onPress={()=>{router.back()}}>

                Finish

            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header:{
        alignItems:"center",
        margin:10
    },
    exerciseContainer:{
        height:50,
        width:400,
        borderWidth:2,
        borderRadius:10,
        margin:10,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    

    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    search:{
        borderWidth:2,
        margin:2,
        height:30,
        width:"70%",
        borderRadius:10,
        padding:20
    }
});

export default AddWorkout;