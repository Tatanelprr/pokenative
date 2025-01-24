import { Colors } from "@/constants/Colors"
import { View, ViewStyle } from "react-native"
import { ThemedText } from "./ThemedText"

type Props = {
    name : keyof (typeof Colors)["type"]
}

export function PokemonType({name} : Props) {
    return <View style = {rootStyle}>
        <ThemedText color = "grayWhite" variant = "subtitle3">{name}</ThemedText>
    </View>
}

const rootStyle = {

} satisfies ViewStyle;