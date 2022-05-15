// @Vendors
import { StyleSheet } from 'react-native';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

// Styles for login screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: colors.white
    },
    authLogo: {
        width: 120,
        height: 120
    },
    control: {
        maxWidth: '100%',
        minWidth: 120,
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: colors.whiteSecondary,
        color: colors.graySecondary,
        borderRadius: 50,
        marginBottom: 25
    },
    containerLogin: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxLoginTitle: {
        
    },
    formLogin: {
        width: '100%'
    },
    titleLogin: {
        fontSize: fonts.size.font30,
        fontWeight: 'bold',
        color: colors.green
    }
});

export default styles;