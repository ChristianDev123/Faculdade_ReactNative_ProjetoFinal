import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Announce from "../screens/announce"
import YourAnnounce from "../screens/announce/yourAnnounce"

export default function AnnounceRoute(){
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator initialRouteName="yourAnnounces" screenOptions={{headerShown:false}}>
            <Stack.Screen name="yourAnnounces" component={YourAnnounce} options={{title:"Seus Anúncios"}}/>
            <Stack.Screen name="newAnnounce" component={Announce} options={{title:"Novo Anuncio"}}/>
        </Stack.Navigator>
    )
}