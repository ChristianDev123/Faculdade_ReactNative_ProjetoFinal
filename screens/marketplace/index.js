import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { Content, ImageStyle } from "./style";
import MainCard from "./components/MainCard";
import IconButton from "../../components/iconButton";
import Feather from '@expo/vector-icons/Feather';

export default function Marketplace({navigation}){
    
    const mockData = [
        {
            id:0,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
        {
            id:1,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
        {
            id:2,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
        {
            id:3,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
        {
            id:4,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
        {
            id:5,
            image:'../../assets/BBS_MockImage.png',
            nameItem:'BBS wheels',
            description:'German sportive style wheels',
            price:1000
        },
    ]
    
    return(
        <SafeAreaView style={Content.page}>
            <View style={Content.mainAnnounceArea}>
                <FlatList
                    horizontal={true}
                    data={mockData}
                    renderItem={({item})=>(<MainCard data={item}/>)}
                    keyExtractor={({id})=>id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <IconButton label="Filtrar" icon={<Feather name="filter" size={24} color="black"/>}/>
            </View>
        </SafeAreaView>
    )
}