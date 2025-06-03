import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {useAuth} from '../../hooks/auth/useAuth'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebaseConfig'

export default function Splash({navigation}){
    const {setUser} = useAuth()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(api_user)=>{
            setUser(api_user)
            const screen = api_user?'marketplace':'login';
            setTimeout(()=>{
                navigation.replace(screen)
            },2000)
        })
        return unsubscribe;
    },[])
    
    return(
        <SafeAreaView style={styles.container}>
            <Image 
                style={styles.image}
                source={{
                    uri:'https://media.lordicon.com/icons/wired/lineal/852-wheel.gif'
                }}
            />
            <Text>BIG RIMS, INCREDIBLE WHEELS</Text>
            <Text>(BRIW)</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    image:{
        width:100,
        height:100,
    }
})