import { Image, Text, View } from 'react-native';
import { Content, ImageStyle } from './styles';

export default function MainCard({data:{image, nameItem, price, description}}){
    return(
        <View style={Content.container}>
            <Image 
                style={ImageStyle.image}
                source={require('../../../../assets/BBS_MockImage.png')}
            />
            <View style={Content.titleContainer}>
                <Text style={Content.title}>{nameItem}</Text>
                <Text style={Content.title}>{Number(price).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</Text>
            </View>
            <Text style={Content.description}>{description}</Text>
        </View>
    )
}