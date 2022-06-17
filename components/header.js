import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default function Header() {
  return (

    <View style={styles.header}>
        <Text style={styles.text}>Todo App</Text>
    </View>

  )

}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'pink',
        height: 70,
        padding:23,
    },
    text:{
        color:'black',
        fontSize: 14,
        fontWeight:`600`,
        display: 'block'
    }
})