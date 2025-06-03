import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Marketplace from "../screens/marketplace"
import Profile from "../screens/profile"
import AnnounceRoute from "./annouceRoute"

export default function MarketplaceRoute(){
    const BottomTab = createBottomTabNavigator()
    return(
        <BottomTab.Navigator initialRouteName="Marketplace" screenOptions={{headerShown:false}}>
            <BottomTab.Screen name="Marketplace" component={Marketplace}/>
            <BottomTab.Screen name="Announce" component={AnnounceRoute}/>
            <BottomTab.Screen name="Profile" component={Profile}/>
        </BottomTab.Navigator>
    )   
}