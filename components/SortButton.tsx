import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, Pressable, Modal, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { Card } from "./Card";
import { Row } from "./Row";
import { Radio } from "./Radio";

type Props  = {
    value : "id" | "name",
    onChange : (v : "id" | "name") => void
};

const options = [
    {label : "Number", value : "id"  },
    {label : "Name"  , value : "name"},
] as const;

export function SortButton ({value, onChange} : Props) {
    const colors = useThemeColors()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onButtonPress = () => {
        setIsModalVisible(true);
    };
    const onClose = () => {
        setIsModalVisible(false);
    }
    return (
        <>
        <Pressable onPress = {onButtonPress}>
            <View style = {[styles.button, {backgroundColor : colors.grayWhite}]}>
                <Image
                    source = {
                        value === "id"
                        ? require('@/assets/images/number.png')
                        : require('@/assets/images/alpha.png')
                    }
                    width = {16}
                    height = {16}
                />
            </View>
        </Pressable>
            <Modal transparent visible = {isModalVisible} onRequestClose={onClose}>
                <Pressable style= {styles.backdrop} onPress={onClose}/>
                <View style = {[styles.popup, {backgroundColor : colors.tint}]}>
                    <ThemedText
                        style = {styles.popup}
                        variant = "subtitle2"
                        color = "grayWhite"
                    >
                        Sort by :
                    </ThemedText>
                    <Card style = {styles.card}>
                        {options.map(option => (
                            <Pressable onPress = {() => onChange(option.value)}>
                                <Row key = {option.value} gap = {8}>
                                    <Radio checked = {option.value === value}/>
                                    <ThemedText>{option.label}</ThemedText>
                                </Row>
                            </Pressable>
                        ))}
                    </Card>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button : {
        width          : 32      ,
        height         : 32      ,
        borderRadius   : 32      ,
        flex           : 0       ,
        alignItems     : 'center',
        justifyContent : 'center',
    },
    backdrop : {
        flex            : 1                     ,
        backgroundColor : "rgba(0, 0, 0, 0.3)",
    },
    popup : {
        padding      : 4 ,
        paddingTop   : 16,
        gap          : 16,
        borderRadius : 12,
    },
    title : {
        paddingLeft : 20,
    },
    card : {
        paddingVertical   : 16,
        paddingHorizontal : 20,
        gap               : 16,
    },
});