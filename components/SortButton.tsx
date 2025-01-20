import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, Pressable, Modal, Text } from "react-native";

type Props  = {
    value : "id" | "name",
    onChange : (v : "id" | "name") => void
}

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
    }
});