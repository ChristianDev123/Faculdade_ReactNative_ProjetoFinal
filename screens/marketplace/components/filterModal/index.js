import Selector from "./component/selector";

export default function FilterModal(){
    return (
        <View>
            <Selector label='Fabricante' options={['Enkei', 'BBS', 'Volcano']} />
            <Selector label='Aros' options={['13\'','15\'','16\'', '17\'', '20\'']}/>
            <Selector label="Estilo" options={['esportivas', 'série', 'off-roads']} />
        </View>
    )
}