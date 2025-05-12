import { router } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StartWorkout = () => {


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
            <ScrollView>

                <TouchableOpacity style={styles.button} onPress={addExercise}>
                        <Text>
                            Add Workout  +
                        </Text>
                </TouchableOpacity>


            </ScrollView>
            




        </View>
    );
};









const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
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
        width:100,
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