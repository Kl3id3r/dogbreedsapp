import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../theme/colors'
import fonts from '../theme/fonts'


const Footer = ({ title }: { title: string }) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{title}</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderTopColor: colors.whiteSecondary,
        padding: 15,
        justifyContent: 'flex-end',
        backgroundColor: colors.white
    },
    footerText: {
        color: colors.gray,
        fontSize: fonts.size.font14,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    }
})