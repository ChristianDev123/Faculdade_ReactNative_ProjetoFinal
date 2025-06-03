import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FormInputText from "../../components/forminputtext";
import FormSubmitBtn from "../../components/formsubmitbtn";
import { useAuth } from "../../hooks/auth/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function Announce({navigation}){
    const {user} = useAuth()
    const screens = ['item', "send" ,"payments", "conclusion"]
    const [screen, setScreen] = useState(screens[0])
    const [fabricante, setFabricante] = useState("")
    const [modelo, setModelo] = useState("")
    const [aro, setAro] = useState("")
    const [estilo, setEstilo] = useState("")
    const [formaEnvio, setFormaEnvio] = useState("")
    const [estadoOrigem, setEstadoOrigem] = useState("")
    const [cidadeOrigem, setCidadeOrigem] = useState("")
    const [formaPagamento, setFormaPagamento] = useState("")

    function ItemScreen(){
        return(
            <View>
                <Text>Informe os dados sobre o item à ser anunciado:</Text>
                <FormInputText label="Fabricante"  
                    value={fabricante}
                    setValue={setFabricante}
                />
                <FormInputText label="Nome/Modelo da Roda" 
                    value={modelo}
                    setValue={setModelo}
                />
                <FormInputText label="Aro" 
                    value={aro}
                    setValue={setAro}
                />
                <FormInputText label="Estilo"
                    value={estilo}
                    setValue={setEstilo}
                />
                <FormSubmitBtn text="proximo" action={()=>setScreen(screens[1])}/>
            </View>
        )
    }
    function SendScreen(){
        return(
            <View>
                <Text>Informe os dados de envio:</Text>
                <FormInputText
                    label="Forma de Envio"
                    value={formaEnvio}
                    setValue={setFormaEnvio}
                />
                <FormInputText
                    label="Estado de Origem"
                    value={estadoOrigem}
                    setValue={setEstadoOrigem}
                />
                <FormInputText
                    label="Cidade de Origem"
                    value={cidadeOrigem}
                    setValue={setCidadeOrigem}
                />
                <FormSubmitBtn
                    text="proximo"
                    action={()=>setScreen(screens[2])}
                />
            </View>
        )
    }
    function PaymentsScreen(){
        return(
            <View>
                <Text>Informe os dados de pagamento:</Text>
                <FormInputText
                    label="Forma de Pagamento"
                    value={formaPagamento}
                    setValue={setFormaPagamento}
                />
                <FormSubmitBtn
                    text="proximo"
                    action={()=>setScreen(screens[3])}
                />
            </View>
        )
    }
    function ConclusionScreen(){
        return(
            <View>
                <Text>Confirme os dados para Criação do Anúncio:</Text>
                <FormSubmitBtn
                    text="Enviar anúncio"
                    action={()=>{
                        const refDoc = doc(db, "anuncio")
                        setDoc(refDoc, {
                            fabricante,
                            modelo,
                            aro,
                            estilo,
                            formaEnvio,
                            estadoOrigem,
                            cidadeOrigem,
                            formaPagamento,
                            usuario:user 
                        })
                    }}
                />
            </View>
        )
    }
   
    return(
        <SafeAreaView>
            <View style={styles.selectorContainer} >
                {screens.map((name_screen, index)=><Button title={name_screen} key={index} onPress={()=>setScreen(name_screen)}/>)}
            </View>
            {
                screen == screens[0]? <ItemScreen/>
                : screen == screens[1]? <SendScreen/>
                : screen == screens[2]? <PaymentsScreen/>
                : <ConclusionScreen />
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    selectorContainer:{
        flexDirection:'row',
        justifyContent:'center'
    }
})