import { StyleSheet } from "react-native";

export const TextWithLink = StyleSheet.create({
    textInline:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export const Screen = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white'
    },
    logoContainer:{
        flex:.1,
        alignItems:'center'
    },
    logoImage:{
        width:70,
        height:70
    }
})

export const Form = StyleSheet.create({
    container:{
        flex:.3,
        justifyContent:'flex-start'
    },
    textLink:{
        color:'red',
        fontWeight:'bold'
    }
})