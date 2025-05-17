import { router } from 'expo-router';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useExerciseStore from '../../../stores/selectedExercises';

const StartWorkout = () => {

    const selectedExercises = useExerciseStore((state)=>{return state.selectedExercises})

    const exerciseRender = ({item}) =>{
        return(
            <View>
                <View style={styles.exerciseHeader}>

                </View>

                <View>
                    <Text>{item.name}</Text>
                    
                    
                </View>

                <TouchableOpacity>
                    Add A New Set
                </TouchableOpacity>


            </View>
        );
    }


    const addExercise = () => {

        router.push("startWorkout/addWorkout")
        
    }

    return (
        <View style={styles.container}>


            <View style = {styles.headerContainer}>
                    <Text style={styles.title}>Start Workout</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            End workout
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={{flex:1,backgroundColor:"blue",width:"100%"}}>
                <FlatList
                data={selectedExercises}
                renderItem={exerciseRender}
                contentContainerStyle={{flex:1,width:"100%",backgroundColor:"black"}}>

                </FlatList>

                <TouchableOpacity style={styles.button} onPress={addExercise}>
                        <Text>
                            Add Workout  +
                        </Text>
                </TouchableOpacity>


            </View>
            




        </View>
    );
};









const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f5f5f5',
        padding:10
    },

    headerContainer:{
        height: 60,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: 10, // optional: add padding
        width: '100%', // make it stretch full width,
        borderBlockColor:"black",
        borderWidth:1,
        borderRadius:10,
        flexDirection:"row"
    },
    button:{
        margin:5,
        width:200,
        backgroundColor: '#DDDDDD',
        alignItems:"center",
        alignSelf:"stretch",
        justifyContent:"center",
        borderWidth:2,
        borderRadius:10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default StartWorkout;