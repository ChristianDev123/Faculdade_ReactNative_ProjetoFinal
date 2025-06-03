import { Text, TouchableOpacity } from "react-native";
import { ContentStyle } from "./style";

export default function IconButton({icon, action, label}){
    return(
        <TouchableOpacity 
            onPress={()=>action()}
            style={ContentStyle.container}
        >
            {icon}
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}