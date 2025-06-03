import { SafeAreaView, View, Text, Image } from "react-native";
import FormInputText from "../../components/forminputtext";
import { useState } from "react";
import FormSubmitBtn from "../../components/formsubmitbtn";
import {auth} from '../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/auth/useAuth";
import { Form, Screen, TextWithLink } from "./styles";

export default function Login({navigation}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useAuth()
    const [state, setState] = useState("login")



    function handleSubmit(){
        if(state == "register")
            createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                setUser(user)
                navigation.replace("marketplace")
            })
        else
            signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                setUser(user)
               navigation.replace("marketplace")
            })
    }

    return(
        <SafeAreaView style={Screen.container}> 
            <View style={Screen.logoContainer}>
                <Image
                    style={Screen.logoImage}
                    source={require('../../assets/logo2.jpeg')}
                />
                <Text>(BRIW)</Text>
                <Text>Big Rims, Incredible Wheels</Text>
            </View>   
            <View style={Form.container}>
                <FormInputText setValue={setEmail} value={email} label={"E-mail"}/>
                <FormInputText setValue={setPassword} value={password} label={"Password"}/>
                <FormSubmitBtn action={handleSubmit} text="Entrar"/>
            </View>
            <View style={TextWithLink.textInline}>
                {state == "login"?(
                    <>
                        <Text>Se você ainda não possui cadastro</Text>
                        <Text style={Form.textLink} onPress={()=>{setState('register')}}> clique aqui </Text>
                        <Text>para se registrar!</Text>
                    </>
                ):(
                    <>
                        <Text>Se você possui cadastro</Text>
                        <Text style={Form.textLink} onPress={()=>{setState('login')}}> clique aqui </Text>
                        <Text>para entrar!</Text>
                    </>
                )}
            </View> 
        </SafeAreaView>
    )
}
