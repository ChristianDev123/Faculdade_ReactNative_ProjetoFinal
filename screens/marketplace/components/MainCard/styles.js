import { StyleSheet } from "react-native";

export const Content = StyleSheet.create({
    container:{
        flex:.6,
        color:'white',
        justifyContent: 'space-between',
        padding:12
    },
    title:{
        fontSize:13,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    description:{
        color:'white',
        fontSize:12,
        textAlign:'justify',
    },
    titleContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'    
    }
})

export const ImageStyle = StyleSheet.create({
    image:{
        width:120,
        height:120,
        borderRadius:10
    }
})