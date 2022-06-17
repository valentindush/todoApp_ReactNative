import React, { useState } from 'react'
import { StyleSheet, Text,View,TextInput, TouchableOpacity,Button } from 'react-native'

export default function TodoInput(props){
    const [text,setText] = useState("")
    return(
        <View style={styles.container}>
            <TextInput onChangeText={(txt)=>setText(txt)} style={styles.input} placeholder='Enter a new TODO' />
            <View style={styles.button}>
            <TouchableOpacity>
                <Button onPress={()=>props.handler(text)} title="Add todo" color='pink' />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input:{
        borderBottomColor: 'pink',
        borderBottomWidth: 2,
        padding: 10,
        underlineColorAndroid: 'transparent',
    },

    button:{
        marginTop: 10,
    }
})