import { StyleSheet, Text, type TextProps } from 'react-native';


const styles = StyleSheet.create({
    body1 : {
        fontSize : 14,
        lineHeight : 16
    },
    body2 : {
        fontSize : 12,
        lineHeight : 16
    },
    body3 : {
        fontSize : 10,
        lineHeight : 16
    },
    caption : {
        fontSize : 8,
        lineHeight : 12
    },
    headline : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : 'bold'
    },
    subtitle1 : {
        fontSize : 14,
        lineHeight : 16,
        fontWeight : 'bold'
    },
    subtitle2 : {
        fontSize : 12,
        lineHeight : 16,
        fontWeight : 'bold'
    },
    subtitle3 : {
        fontSize : 10,
        lineHeight : 16,
        fontWeight : 'bold'
    }
});


type Props = TextProps & {
    variant? : keyof typeof styles, 
    color?   : string
}

export function ThemedText({variant, color, ...rest} : Props) {
    return <Text style = {styles[variant ?? 'body3']} {...rest}/>
}

