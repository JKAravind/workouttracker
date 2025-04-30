import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.Boxcontainer}>
                <Text>Container 1</Text>
            </View>

            <View style={styles.Boxcontainer}>
                <Text>Container 2</Text>
            </View>

            <View style={styles.Boxcontainer}>
                <Text>Container 3</Text>
            </View>

        </View>
    );

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    Boxcontainer: {
        flex: 1,
        width:'100%',
        margin:10,
        borderWidth:1,
        borderColor:"black",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

