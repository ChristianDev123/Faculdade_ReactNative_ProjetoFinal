import { TouchableOpacity, View, Text } from "react-native";
import { Container, TextButton } from "./styles";

export default function FormSubmitBtn({text, action}){
    return(
        <View style={Container.container}>
            <TouchableOpacity 
                style={Container.buttonContainer}
                onPress={()=>action()}
            >
                <Text style={TextButton.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}