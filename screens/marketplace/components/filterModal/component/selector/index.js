import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Selector({label, options, selectedOption, setSelectedOption}){
    return(
        <View>
            <Text>{label}</Text>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(value)=>{setSelectedOption(value)}}
            >
                {options.map((option)=>(
                    <Picker.Item label={option} value={option}/>
                ))}
            </Picker>
        </View>
    )
}