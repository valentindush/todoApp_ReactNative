import React from "react";
import { StyleSheet, Text,TouchableOpacity } from "react-native";

export default function TodoItem(props){



    return(
        <TouchableOpacity>
            <Text onPress={()=>props.handler(props.todo.key)} style={styles.text}>{props.todo.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
        borderColor: 'cyan',
        borderRadius: 10,
        width: '100%',
        display: 'block',
        borderWidth: 2,
        marginTop: 10
    }
})