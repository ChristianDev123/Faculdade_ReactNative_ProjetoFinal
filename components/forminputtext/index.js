import { Text, TextInput, View } from "react-native";
import { Container, TextInputStyle } from "./styles";

export default function FormInputText({label ,value, setValue}){
    return(
        <View style={Container.container}>
            <Text>{label}</Text>
            <View style={{paddingLeft:10}}>
                <TextInput
                    style={TextInputStyle.textInput}
                    value={value}
                    onChangeText={setValue}
                />
            </View>
        </View>
    )
}