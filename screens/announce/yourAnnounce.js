import { SafeAreaView } from "react-native";
import IconButton from "../../components/iconButton";
import AntDesign from '@expo/vector-icons/AntDesign'
export default function YourAnnounce({navigation}){
    return(
        <SafeAreaView>
            <IconButton 
                icon={<AntDesign name="pluscircleo" size={24} color='red'/>}
                action={()=>{
                    navigation.push("newAnnounce")
                }}
                label="Novo Anúncio"
            />
        </SafeAreaView>
    )
}