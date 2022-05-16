import { StyleSheet } from "react-native";
import fonts from "../theme/fonts";

export const stylesButton = StyleSheet.create({
    styledButton: {
        width: '100%',
        paddingVertical: 13,
        paddingHorizontal: 23,
        borderRadius: 50,
    },
    styledButtonText: {
        textTransform: 'uppercase',
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
    }
})