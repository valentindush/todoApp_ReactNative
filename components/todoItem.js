import React from "react";
import { StyleSheet, Text,TouchableOpacity } from "react-native";
import { View } from "react-native-web";

export default function TodoItem(props){



    return(
        <TouchableOpacity>
            <View style={styles.text}>
                <Text style={styles.txt} onPress={()=>props.handler(props.todo.key)} >{props.todo.text}</Text>
                <Text style={styles.time}>{props.todo.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txt:{
        display: 'block'
    },
    text:{
        padding: 20,
        borderColor: 'pink',
        borderRadius: 10,
        width: '100%',
        display: 'block',
        borderWidth: 2,
        marginTop: 10
    },
    time:{
        color: 'grey',
        marginTop: 10,
        display:'block',
        fontSize: 12
    }
})