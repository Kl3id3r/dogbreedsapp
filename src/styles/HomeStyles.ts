import { StyleSheet } from "react-native";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

export const homeStyles = StyleSheet.create({
    breedItemContainer: {
        backgroundColor: colors.whiteSecondary,
        marginBottom: 25,
        padding: 13,
        borderRadius: 5
    },
    breedItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    breedItemIcon: {
        marginRight: 15
    },
    breedTitle: {
        fontSize: fonts.size.font16,
        fontWeight: fonts.weight.semi,
        color: colors.graySecondary,
        textTransform: 'capitalize'
    }
})