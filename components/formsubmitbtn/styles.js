import { StyleSheet } from "react-native";

export const Container = StyleSheet.create({
    container:{
        alignItem:'center',
        justifyContent: 'center'
    },
    buttonContainer:{
        height:30,
        backgroundColor:'red',
        borderRadius:5,
        justifyContent:'center',
    }
})

export const TextButton = StyleSheet.create({
    text:{
        color:'white',
        textAlign:'center',
        textTransform:'uppercase',
    }
})